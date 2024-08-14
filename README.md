
![User Management API](https://link-para-seu-banner.com/banner.png)

---

# API REST COM NODEJS E EXPRESS


## Tabela de Conteúdos

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Endpoints](#endpoints)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuições](#contribuições)
- [Licença](#licença)


## Descrição

Esta é uma API para gerenciar usuários de um sistema. Ela permite realizar operações CRUD (criar, ler, atualizar e excluir) de usuários. Esta API foi desenvolvida por mim com o objetivo de fornecer um exemplo simples e funcional para gerenciar dados de usuários.

## Funcionalidades

A API oferece as seguintes funcionalidades:

- **Criar Usuário**: Adiciona um novo usuário ao sistema.
- **Listar Usuários**: Retorna uma lista de todos os usuários cadastrados.
- **Consultar Usuário**: Retorna os detalhes de um usuário específico.
- **Atualizar Usuário**: Atualiza as informações de um usuário existente.
- **Excluir Usuário**: Remove um usuário do sistema.

## Endpoints

### Lembrar que a URL completa é ***http://localhost:3000/***

### 1. Criar Usuário

- **URL**: `/api/usuarios`
- **Método**: `POST`
- **Descrição**: Cria um novo usuário.
- **Exemplo de Request**:
  ```json
  {
    "nome": "Lucas Ariel",
    "email": "lucas@example.com",
    "idade": 18
  }
  ```
- **Exemplo de Response**:
  ```json
  {
    "id": 1,
    "nome": "Lucas Ariel",
    "email": "lucas@example.com",
    "idade": 18
    "data_criacao": "2024-08-09T12:00:00Z"
  }
  ```

### 2. Listar Usuários

- **URL**: `/api/usuarios`
- **Método**: `GET`
- **Descrição**: Retorna todos os usuários cadastrados.
- **Exemplo de Response**:
  ```json
  [
    {
      "id": 1,
     "nome": "Lucas Ariel",
     "email": "lucas@example.com",
     "idade": 18
    },
    {
      "id": 2,
      "nome": "Ariel Lucas",
      "email": "Ariel.lucas@example.com",
      "idade": 25
    }
  ]
  ```

### 3. Consultar Usuário

- **URL**: `/api/usuarios/{id}`
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de um usuário específico.
- **Parâmetros**: `id` (obrigatório) - ID do usuário a ser consultado.
- **Exemplo de Response**:
  ```json
  {
    "id": 1,
    "nome": "Lucas Ariel",
    "email": "lucas@example.com",
    "idade": 18
  }
  ```

### 4. Atualizar Usuário

- **URL**: `/api/usuarios/{id}`
- **Método**: `PUT`
- **Descrição**: Atualiza os dados de um usuário existente.
- **Parâmetros**: `id` (obrigatório) - ID do usuário a ser atualizado.
- **Exemplo de Request**:
  ```json
  {
    "nome": "João da Silva",
    "email": "joao.silva@exemplo.com",
    "idade": 31
  }
  ```
- **Exemplo de Response**:
  ```json
  {
    "id": 1,
    "nome": "João da Silva",
    "email": "joao.silva@exemplo.com",
    "idade": 31
  }
  ```

### 5. Excluir Usuário

- **URL**: `/api/usuarios/{id}`
- **Método**: `DELETE`
- **Descrição**: Remove um usuário do sistema.
- **Parâmetros**: `id` (obrigatório) - ID do usuário a ser excluído.
- **Exemplo de Response**:
  ```json
  {
    "mensagem": "Usuário excluído com sucesso"
  }
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
   npm start
   ```

A API estará disponível em `http://localhost:3000`.

## Tecnologias Utilizadas

- Node.js
- Express
- MYsql 

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
