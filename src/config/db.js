require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME
 });
  
connection.connect((err) => {
if (err) { console.error('Erro ao conectar ao banco de dados: ' + err.stack);
  return;
}
console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

module.exports = connection;
