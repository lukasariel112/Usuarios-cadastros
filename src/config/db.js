
const mariadb = require('mariadb');

// Configurar a conexão com o banco de dados
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',     // Substitua com seu usuário do MariaDB
  password: 'La31@lu31', // Substitua com sua senha do MariaDB
  database: 'users', // Substitua com o nome do banco de dados
  connectionLimit: 5
});


// Função para obter uma conexão
const getConnection = async () => {
  try {
    return await pool.getConnection();
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
};

module.exports = { getConnection };
