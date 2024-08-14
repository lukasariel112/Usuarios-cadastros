const mysql = require('mysql2');

// Conecta no banco
const connection = mysql.createConnection({
  host: 'localhost', //local
  user: 'root',     // Usuario do banco
  password: 'La31@lu31', // Senha do usuario
  database: 'users', // nome do nosso banco
});

// Conectar ao banco de dados
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);// Mensagem quando da erro
  }
  console.log('Conectado ao banco de dados MySQL.');
});

module.exports = connection;
