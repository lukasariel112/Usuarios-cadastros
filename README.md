---

# API REST COM NODEJS E EXPRESS


## Tabela de Conteúdos

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Banco de dados](#Banco-de-dados)
- [Endpoints](#endpoints)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuições](#contribuições)


## Descrição

Esta é uma API para gerenciar usuários de um sistema. Ela permite realizar operações CRUD (criar, ler, atualizar e excluir) de usuários. Esta API foi desenvolvida por mim com o objetivo de fornecer um exemplo simples e funcional para gerenciar dados de usuários.

## Funcionalidades

A API oferece as seguintes funcionalidades:

- **Criar Usuário**: Adiciona um novo usuário ao sistema.
- **Listar Usuários**: Retorna uma lista de todos os usuários cadastrados.
- **Consultar Usuário**: Retorna os detalhes de um usuário específico.
- **Atualizar Usuário**: Atualiza as informações de um usuário existente.
- **Excluir Usuário**: Remove um usuário do sistema.

## Banco de dados 

Criar primeiramente a tabela, parecida com esse exemplo: 
  ```sql
  CREATE TABLE nome_da_tabela (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  password VARCHAR(255) NOT NULL
);
  ```

Para validar se os dados foram Criados, alterados ou excluidos rodar no Banco de dados:
  ```sql
  select * from users 
  ```

## Endpoints

### Lembrar que a URL completa é ***http://localhost:3000/***

### 1. Criar Usuário

- **URL**: `/api/users`
- **Método**: `POST`
- **Descrição**: Cria um novo usuário.
- **Exemplo de Request**:
  ```json
  {
  "name": "teste11111",
  "phone": "132321321",
  "password": "1234"
  }
  ```
- **Exemplo de Response**:
  ```json
  {
    "id": 1,
    "name": "Lucas Ariel",
    "phone": "132321321",
    "password": "1234"
}
  ```

### 2. Listar Usuários

- **URL**: `/api/users`
- **Método**: `GET`
- **Descrição**: Retorna todos os usuários cadastrados.
- **Exemplo de Response**:
  ```json
  [
    {
        "id": 10,
        "name": "testelukas",
        "phone": "9999999999",
        "password": "1234senha"
    },
    {
        "id": 12,
        "name": "dasdsadsad",
        "phone": "132321321",
        "password": "1234"
    }
  ]
  ```

### 3. Consultar Usuário

- **URL**: `/api/users/{id}` adicionar nas chaver o id da busca
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de um usuário específico.
- **Parâmetros**: `id` (obrigatório) - ID do usuário a ser consultado.
- **Exemplo de Response**:
  ```json
  {
    "id": 10,
    "name": "testelukas",
    "phone": "9999999999",
    "password": "1234senha"
  }
  ```

### 4. Atualizar Usuário

- **URL**: `/api/users/{id}` Lembrar de usar o método PUT
- **Método**: `PUT`
- **Descrição**: Atualiza os dados de um usuário existente.
- **Parâmetros**: `id` (obrigatório) - ID do usuário a ser atualizado.
- **Exemplo de Request**:
  ```json
  {
  "name": "nomealterado",
  "phone": "12343242343",
  "password": "senhaalterada"
  }

  ```
- **Exemplo de Response**:
  ```json
  {
    "id": 10,
    "name": "nomealterado",
    "phone": "12343242343",
    "password": "senhaalterada"
  }
  ```

### 5. Excluir Usuário

- **URL**: `/api/usuarios/{id}`
- **Método**: `DELETE`
- **Descrição**: Remove um usuário do sistema.
- **Parâmetros**: `id` (obrigatório) - ID do usuário a ser excluído.
  ```


## Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. **Instale as dependências**:
   ```bash
   cd seu-repositorio
   npm install
   ```
3. **Inicie o servidor**:
   ```bash
   npm start Ou node app.js
   ```
4. Dar cd na pasta src para rodar o node app.js

A API estará disponível em `http://localhost:3000`.

5. Caso não funcionar rodar o npm install express

## Tecnologias Utilizadas

- Node.js
- Express
- MYsql 

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
