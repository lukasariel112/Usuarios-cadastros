const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Corpo arq JSON
app.use(express.json());

// Rotas
app.use('/api', userRoutes);

// Iniciar o servidor porta 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
