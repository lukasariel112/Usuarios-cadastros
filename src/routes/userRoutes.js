const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota novo usuário
router.post('/users', userController.createUser);

// Rota lista usuários criados
router.get('/users', userController.getAllUsers);

// Lista somente um usuário específico pelo ID
router.get('/users/:id', userController.getUserById);

// Atualizar informações do usuário pelo ID
router.put('/users/:id', userController.updateUser);

// Excluir um usuário pelo ID 
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
