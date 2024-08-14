
![User Management API](https://link-para-seu-banner.com/banner.png)

---

# API RESTE COM EXPRESS E NODEJS


 User Management API

## Descrição

Esta é uma API para gerenciar usuários, permitindo operações CRUD (criar, ler, atualizar e excluir). A API foi construída com Node.js e Express, e utiliza MySQL para persistência de dados.

## Requisitos

- Node.js (versão 14 ou superior recomendada)
- MySQL (versão 5.7 ou superior recomendada)

## Configuração

### 1. Clonar o Repositório

Clone o repositório para o seu ambiente local:

```bash
git clone <URL_DO_REPOSITORIO>
cd user-management-api

2. Instalar Dependências

Instale as dependências do projeto:

bash

npm install

3. Configurar o Banco de Dados

    Crie um banco de dados MySQL chamado user_management_db.

    Crie a tabela users com a seguinte estrutura:

    sql

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  password VARCHAR(255) NOT NULL
);

Atualize as credenciais do banco de dados no arquivo src/config/db.js:

javascript

    const mysql = require('mysql');

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'username',     // Substitua com seu usuário do MySQL
      password: 'password', // Substitua com sua senha do MySQL
      database: 'user_management_db',
    });

    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to the database:', err);
        return;
      }
      console.log('Connected to the database.');
    });

    module.exports = connection;

4. Iniciar o Servidor

Inicie o servidor com o seguinte comando:

bash

npm start

O servidor estará disponível em http://localhost:3000.
Endpoints da API
1. Criar um Novo Usuário

    URL: /api/users

    Método: POST

    Corpo da Requisição (JSON):

    json

{
  "name": "Nome do Usuário",
  "phone": "123456789",
  "password": "senha123"
}

Resposta:

json

    {
      "id": 1,
      "name": "Nome do Usuário",
      "phone": "123456789",
      "password": "senha123"
    }

2. Listar Todos os Usuários

    URL: /api/users

    Método: GET

    Resposta:

    json

    [
      {
        "id": 1,
        "name": "Nome do Usuário",
        "phone": "123456789",
        "password": "senha123"
      }
    ]

3. Obter Detalhes de um Usuário Específico

    URL: /api/users/{id}

    Método: GET

    Resposta:

    json

    {
      "id": 1,
      "name": "Nome do Usuário",
      "phone": "123456789",
      "password": "senha123"
    }

4. Atualizar Informações de um Usuário

    URL: /api/users/{id}

    Método: PUT

    Corpo da Requisição (JSON):

    json

{
  "name": "Nome Atualizado",
  "phone": "987654321",
  "password": "novaSenha123"
}

Resposta:

json

    {
      "id": 1,
      "name": "Nome Atualizado",
      "phone": "987654321",
      "password": "novaSenha123"
    }

5. Excluir um Usuário

    URL: /api/users/{id}
    Método: DELETE
    Resposta: 204 No Content

Exemplos de Requisições
Criar um Novo Usuário

bash

curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Nome do Usuário", "phone": "123456789", "password": "senha123"}'

Listar Todos os Usuários

bash

curl -X GET http://localhost:3000/api/users

Obter Detalhes de um Usuário Específico

bash

curl -X GET http://localhost:3000/api/users/1

Atualizar Informações de um Usuário

bash

curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Nome Atualizado", "phone": "987654321", "password": "novaSenha123"}'

Excluir um Usuário

bash

curl -X DELETE http://localhost:3000/api/users/1

Documentação

Para mais detalhes sobre como usar esta API, consulte a documentação incluída no código-fonte e nos exemplos de requisição fornecidos acima.


Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
