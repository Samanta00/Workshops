## Projeto feito com Angular e Java Spring Boot



Perfeito! Vou organizar e deixar seu texto mais claro, estruturado e fácil de seguir, sem perder nenhuma instrução. Aqui está uma versão melhorada:

---

# Projeto Angular + Java Spring Boot

Este projeto possui **frontend em Angular** e **backend em Java Spring Boot**.

---

## Rodando o Frontend

1. **Entre na pasta do frontend:**

```bash
cd Frontend/workshops/
```

2. **Suba o container Docker do Angular:**

```bash
docker compose up -d --build
```

3. **Acesse o container:**

```bash
docker exec -it workshops sh
```

4. **Dentro do container**, vá para a pasta do app e rode o Angular:

```bash
cd /app/workshops
ng serve --host 0.0.0.0
```
Isso iniciará o Angular na porta padrão (`4200`) e permitirá acesso externo ao container.

Perfeito! Vou organizar e melhorar a clareza do seu texto, deixando o passo a passo mais limpo e profissional:

---

### Rodando o Backend

1. **Abra um novo terminal** e entre na pasta do backend:

```bash
cd WorkShops/Api-segura/api/Docker
```

2. **Suba o container Docker do backend:**

```bash
docker compose up -d --build
```

> Esse comando irá criar e iniciar os containers em segundo plano.

3. **Haverá um arquivo específico `docker-compose.yaml`, rode:**

```bash
docker compose -f docker-compose.yaml up --build
```

4. **Pronto!**


Perfeito! Vou criar uma **documentação de uso clara e organizada** para todas as rotas que você mencionou, com exemplos de requisições e explicações sobre cada endpoint.

---

# Documentação de Uso da API - Workshops

A API permite gerenciar **workshops**, **colaboradores** e **atas de presença**.

Todas as rotas seguem o padrão REST e usam **JSON** para requisições e respostas.

Para uma Collection com as requests da rota acesse e baixe o json: https://drive.google.com/file/d/1q6RZySYNTTIN9IKrHuQbKxzNF41jmQ5D/view?usp=drive_link

---

## 1 Cadastrar um Workshop

**Endpoint:**

```
POST /api/workshops
```

**Descrição:**
Cria um novo workshop no sistema.

**Requisição (JSON):**

```json
{
  "nome": "Workshop Angular",
  "descricao": "Treinamento de Angular Avançado",
  "dataRealizacao": "2026-01-26"
}
```

**Resposta (JSON):**

```json
{
  "id": 1,
  "nome": "Workshop Angular",
  "descricao": "Treinamento de Angular Avançado",
  "dataRealizacao": "2026-01-26"
}
```

---

## 2 Cadastrar um Colaborador

**Endpoint:**

```
POST /api/colaboradores
```

**Descrição:**
Adiciona um novo colaborador ao sistema.

**Requisição (JSON):**

```json
{
  "nome": "João Silva",
  "email": "joao.silva@email.com"
}
```

**Resposta (JSON):**

```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao.silva@email.com"
}
```

---

## 3 Adicionar um Colaborador a uma Ata

**Endpoint:**

```
PUT /api/workshops/<workshopId>/atas/<ataId>
```

**Descrição:**
Associa um colaborador a uma ata de presença específica de um workshop.

**Requisição (JSON):**

```json
{
  "colaboradorId": 1
}
```

**Exemplo:**

```
PUT /api/workshops/1/atas/1
```

**Resposta (JSON):**

```json
{
  "mensagem": "Colaborador adicionado à ata com sucesso."
}
```

---

## 4 Remover um Colaborador de uma Ata

**Endpoint:**

```
DELETE /api/atas/<ataId>/colaboradores/<colaboradorId>
```

**Descrição:**
Remove um colaborador específico de uma ata de presença.

**Exemplo:**

```
DELETE /api/atas/1/colaboradores/1
```

**Resposta (JSON):**

```json
{
  "mensagem": "Colaborador removido da ata com sucesso."
}
```

---

## 5 Criar uma Ata de Presença de um Workshop

**Endpoint:**

```
POST /api/atas
```

**Descrição:**
Cria uma nova ata de presença para um workshop.

**Requisição (JSON):**

```json
{
  "workshopId": 1,
  "descricao": "Ata de presença - Workshop Angular"
}
```

**Resposta (JSON):**

```json
{
  "id": 1,
  "workshopId": 1,
  "descricao": "Ata de presença - Workshop Angular",
  "colaboradores": []
}
```

---

## 6 Listar Colaboradores e Workshops

**Endpoint:**

```
GET /api/atas
```

**Descrição:**
Retorna uma lista de colaboradores em ordem alfabética, com informações sobre os workshops que participaram.

**Resposta (JSON):**

```json
[
  {
    "colaboradorId": 1,
    "nome": "João Silva",
    "email": "joao.silva@email.com",
    "workshops": [
      {
        "workshopId": 1,
        "nome": "Workshop Angular",
        "dataRealizacao": "2026-01-26"
      }
    ]
  },
  {
    "colaboradorId": 2,
    "nome": "Maria Souza",
    "email": "maria.souza@email.com",
    "workshops": []
  }
]
```

---

## 7 Filtrar Colaboradores por Data de Workshop

**Endpoint:**

```
GET /api/atas?data=<data>
```

**Descrição:**
Retorna os colaboradores que participaram de workshops realizados em uma data específica.

**Exemplo:**

```
GET /api/atas?data=2026-01-26
```

**Resposta (JSON):**

```json
[
  {
    "colaboradorId": 1,
    "nome": "João Silva",
    "email": "joao.silva@email.com",
    "workshops": [
      {
        "workshopId": 1,
        "nome": "Workshop Angular",
        "dataRealizacao": "2026-01-26"
      }
    ]
  }
]
```

---

   Seu backend estará rodando e pronto para receber requisições.


