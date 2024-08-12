const db = require('../config/db');

// Criar um novo usuário
exports.createUser = (req, res) => {
  const { nome, telefone, senha } = req.body;
  const query = 'INSERT INTO users (nome, telefone, senha) VALUES (?, ?, ?)';
  db.query(query, [nome, telefone, senha], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: results.insertId, nome, telefone });
  });
};

// Listar todos os usuários
exports.getUsers = (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Obter detalhes de um usuário específico
exports.getUserById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(200).json(results[0]);
  });
};

// Atualizar informações de um usuário
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nome, telefone, senha } = req.body;
  const query = 'UPDATE users SET nome = ?, telefone = ?, senha = ? WHERE id = ?';
  db.query(query, [nome, telefone, senha, id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(200).json({ id, nome, telefone });
  });
};

// Excluir um usuário
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  });
};
