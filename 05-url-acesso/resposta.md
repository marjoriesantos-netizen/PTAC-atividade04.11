# 5. URL de acesso

## URL completa

```text
http://localhost:3000/api/produtos
```

## Composição da URL

| Parte | Valor |
|---|---|
| Protocolo | `http` |
| Host | `localhost` |
| Porta | `3000` |
| Caminho | `/api/produtos` |
| Método | `GET` |

## Onde a rota está definida

A porta é definida em `api-express/server.js`:

```js
const PORT = process.env.PORT || 3000;
```

O caminho é montado com o router de produtos:

```js
app.use("/api/produtos", produtosRoutes);
router.get("/", listarProdutos);
```

Resultado:

```text
GET http://localhost:3000/api/produtos
```

Ao abrir essa URL no navegador, a API responde com status `200` e uma lista de documentos JSON com `_id`.

## Detalhe de uma API Express

Para acessar um produto específico, o caminho recebe o identificador:

```text
http://localhost:3000/api/produtos/65f1a2b3c4d5e6f7a8b9c0d1
```

Se a variável de ambiente `PORT` estiver definida, a API usa essa porta em vez de `3000`. Nesse caso, apenas a porta da URL muda; o caminho continua `/api/produtos`.
