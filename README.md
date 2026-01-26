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
   Seu backend estará rodando e pronto para receber requisições.
