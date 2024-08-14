const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Criar um novo usuário
router.post('/users', userController.createUser);

// Listar todos os usuários
router.get('/users', userController.getAllUsers);

// Obter detalhes de um usuário específico
router.get('/users/:id', userController.getUserById);

// Atualizar informações de um usuário
router.put('/users/:id', userController.updateUser);

// Excluir um usuário
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
