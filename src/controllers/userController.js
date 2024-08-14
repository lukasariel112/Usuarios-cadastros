const db = require('../config/db');

// Criar um novo usuário
exports.createUser = async (req, res) => {
  const { name, phone, password } = req.body;
  if (!name || !phone || !password) {
    return res.status(400).json({ error: 'Name, phone, and password are required' });
  }

  try {
    const conn = await db.getConnection();
    const query = 'INSERT INTO users (name, phone, password) VALUES (?, ?, ?)';
    const result = await conn.query(query, [name, phone, password]);
    conn.end();
    res.status(201).json({ id: result.insertId, name, phone, password });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Listar todos os usuários
exports.getAllUsers = async (req, res) => {
  try {
    const conn = await db.getConnection();
    const query = 'SELECT * FROM users';
    const results = await conn.query(query);
    conn.end();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Obter detalhes de um usuário específico
exports.getUserById = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const conn = await db.getConnection();
    const query = 'SELECT * FROM users WHERE id = ?';
    const results = await conn.query(query, [userId]);
    conn.end();
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Atualizar informações de um usuário
exports.updateUser = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { name, phone, password } = req.body;

  try {
    const conn = await db.getConnection();
    const query = 'UPDATE users SET name = ?, phone = ?, password = ? WHERE id = ?';
    const result = await conn.query(query, [name, phone, password, userId]);
    conn.end();
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ id: userId, name, phone, password });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Excluir um usuário
exports.deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  try {
    const conn = await db.getConnection();
    const query = 'DELETE FROM users WHERE id = ?';
    const result = await conn.query(query, [userId]);
    conn.end();
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
