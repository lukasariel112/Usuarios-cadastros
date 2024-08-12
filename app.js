const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// Simulando um banco de dados com um objeto
let users = {};
let userIdCounter = 1;

// Função para gerar IDs de usuário
const generateUserId = () => {
  return userIdCounter++;
};

// Criar um usuário
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const userId = generateUserId();
  const user = { id: userId, name, email };
  users[userId] = user;
  res.status(201).json(user);
});

// Ler um usuário
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users[userId];

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// Atualizar um usuário
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users[userId];

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

// Excluir um usuário
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);

  if (!users[userId]) {
    return res.status(404).json({ error: 'User not found' });
  }

  delete users[userId];
  res.status(204).send();
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
