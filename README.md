
![User Management API](https://link-para-seu-banner.com/banner.png)

---

# User Management API


## Tabela de Conteúdos

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Endpoints](#endpoints)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuições](#contribuições)
- [Licença](#licença)


## Descrição

Esta é uma API para gerenciar usuários de um sistema. Ela permite realizar operações CRUD (criar, ler, atualizar e excluir) de usuários. Esta API foi desenvolvida com o objetivo de fornecer um exemplo simples e funcional para gerenciar dados de usuários.

## Funcionalidades

A API oferece as seguintes funcionalidades:

- **Criar Usuário**: Adiciona um novo usuário ao sistema.
- **Listar Usuários**: Retorna uma lista de todos os usuários cadastrados.
- **Consultar Usuário**: Retorna os detalhes de um usuário específico.
- **Atualizar Usuário**: Atualiza as informações de um usuário existente.
- **Excluir Usuário**: Remove um usuário do sistema.

## Endpoints

### 1. Criar Usuário

- **URL**: `/api/usuarios`
- **Método**: `POST`
- **Descrição**: Cria um novo usuário.
- **Exemplo de Request**:
  ```json
  {
    "nome": "João da Silva",
    "email": "joao.silva@example.com",
    "idade": 30
  }
  ```
- **Exemplo de Response**:
  ```json
  {
    "id": 1,
    "nome": "João da Silva",
    "email": "joao.silva@example.com",
    "idade": 30,
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
      "nome": "João da Silva",
      "email": "joao.silva@example.com",
      "idade": 30
    },
    {
      "id": 2,
      "nome": "Maria Oliveira",
      "email": "maria.oliveira@example.com",
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
    "nome": "João da Silva",
    "email": "joao.silva@example.com",
    "idade": 30
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
