# API de Cadastro de Dispositivos IoT

Este projeto é uma aplicação em React que exibe logs de acesso de usuários ou dispositivos com base em um arquivo JSON. Ele permite filtrar os dados por **usuário** ou **dispositivo** e apresenta os resultados em uma tabela.

## Tecnologias

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- CSS
- Docker e Docker Compose

---

## Antes de executar a aplicação, tenha o [Docker](https://docs.docker.com/get-docker/) instalado em sua máquina e copie o repositório em sua máquina

---
### 1. Navegue até a pasta do projeto no prompt de comando e execute esse comando:

```bash
docker compose up --build
```

### 2. Acesse a aplicação em:
[http://localhost:5173](http://localhost:5173) 

---

## Funcionalidades do projeto
- Filtrar por usuário ou dispositivo
- Buscar por nome, userId, mac ou lockId
- Exibir logs ordenados por data
- Interface visual estilizada 
- Reponsiva
- A aplicação tem um botão de Limpar, que reseta a busca de todos os logs

# Como usar a aplicação

## Logo na frente quando o projeto é aberto, aparece algumas opções.
## Você pode selecionar para ver os logs por usuario ou por dispositivos:
### Por usuario:
- Na barra de pesquisa colcoque o nome da pessoa que deseja buscar ou o userId que consta no arquivo data.json.

### Por dispositivo:
- Na barra de pesquisa coloque o mac ou o lockId do dispositivo que também consta no arquivo data.json.

## Irá aparecer uma tabela logo a baixo com informações sobre a pessoa/dispositivo.

---

## Desenvolvido por Guilherme Sanches Magdalena