const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Aqui cria um novo usuário Lembrar de usar o metodo POST
router.post('/users', userController.createUser);

// Mostra os usuarios ja criados lembrar de usar o GET
router.get('/users', userController.getAllUsers);

// Mostrar somente um usuário específico pode ser pelo ID
router.get('/users/:id', userController.getUserById);

// Atualizar informações de um usuário lembrar pelo ID
router.put('/users/:id', userController.updateUser);

// Excluir um usuário pelo ID e metodo DELETE
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
