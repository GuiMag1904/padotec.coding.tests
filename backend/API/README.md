# API de Cadastro de Dispositivos IoT

Este projeto é uma API REST feita com Node.js e Express.js para cadastro e gerenciamento de dispositivos IoT.

## Tecnologias

- Node.js
- Express
- MongoDB (via Mongoose)
- Docker

---

## Antes de executar a aplicação, tenha o [Docker](https://docs.docker.com/get-docker/) instalado em sua máquina e copie o repositório em sua máquina

---

## Como executar a aplicação com Docker

### 1. Vá até a pasta que contém o projeto no prompt de comando e faça o build da imagem:

```bash
docker build -t cadastro-dispositivos .
```

### 2. Rode o docker compose:

```bash
docker-compose up --build
```

> A API estará disponível em: `http://localhost:3000/api/dispositivos`



---

## Endpoints disponíveis

### POST `/api/dispositivos/`

**Cadastra um novo dispositivo IoT**

```json
{
  "name": "Sensor de temperatura",
  "mac": "00:1B:44:11:3A:B7",
  "email": "usuario@example.com",
}
```

**Resposta (201):**
```json
{
  "id": "id gerado",
  "mac": "00:1B:44:11:3A:B7"
}
```

---

### GET `/api/dispositivos/`

**Lista todos os dispositivos cadastrados**

**Resposta (201):**
```json
{
    "_id": "67f7356b9f605089658e8205",
  "name": "Sensor de temperatura",
  "mac": "00:1B:44:11:3A:B7",
  "email": "usuario@gmail.com",
  "timestamp": "2025-04-10T03:05:15.202Z"
}
```

---

### GET `/api/dispositivos/:id`

**Busca um dispositivo específico pelo id**


**Resposta (200):**
```json
{
    "_id": "67f7356b9f605089658e8205",
  "name": "Sensor de temperatura",
  "mac": "00:1B:44:11:3A:B7",
  "email": "usuario@gmail.com",
  "timestamp": "2025-04-10T03:05:15.202Z"
}
```

---

### PUT `/api/dispositivos/:id`

**Atualiza os dados de um dispositivo pelo id**

```json
{
    "name": "Sensor de movimento",
}
```

**Resposta (200):**
```json
{
    {
    "_id": "67f7356b9f605089658e8205",
  "name": "Sensor de movimento",
  "mac": "00:1B:44:11:3A:B7",
  "email": "usuario@gmail.com",
  "timestamp": "2025-04-10T03:05:15.202Z"
}
}
```

---

### DELETE `/api/dispositivos/:id`

Remove um dispositivo pelo id.

---

## Desenvolvido por Guilherme Sanches Magdalena