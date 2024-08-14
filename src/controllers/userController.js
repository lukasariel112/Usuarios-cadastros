const db = require('../config/db');

// Criar um novo usuário
exports.createUser = (req, res) => {
  const { name, phone, password } = req.body;
  if (!name || !phone || !password) {
    return res.status(400).json({ error: 'Name, phone, and password are required' });
  }
  
  const query = 'INSERT INTO users (name, phone, password) VALUES (?, ?, ?)';
  db.query(query, [name, phone, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(201).json({ id: results.insertId, name, phone, password });
  });
};

// Mostra todos os usuários
exports.getAllUsers = (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results);
  });
};

// Busca dados de um usuário específico lembrar pelo ID
exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(results[0]);
  });
};

// Atualizar dados de um usuário
exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { name, phone, password } = req.body;
  
  const query = 'UPDATE users SET name = ?, phone = ?, password = ? WHERE id = ?';
  db.query(query, [name, phone, password, userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ id: userId, name, phone, password });
  });
};

// Excluir um usuário
exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();
  });
};
