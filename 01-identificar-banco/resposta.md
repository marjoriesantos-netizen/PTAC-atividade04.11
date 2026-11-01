# 1. Identificar o banco

## Endpoint analisado

```text
GET http://localhost:3000/api/produtos
```

## Identificador retornado

O JSON da API retorna `_id`.

```json
[
  {
    "_id": "65f1a2b3c4d5e6f7a8b9c0d1",
    "produto": "Café",
    "preco": 12.5,
    "tags": ["quente", "manhã"],
    "fornecedor": {
      "nome": "CoopeCafé",
      "cidade": "Dourados"
    }
  }
]
```

## Justificativa

O campo `_id` é o identificador padrão de documentos no MongoDB. Nesse banco, todo documento de uma coleção recebe um `_id`, geralmente um `ObjectId` representado por 24 caracteres hexadecimais, como `65f1a2b3c4d5e6f7a8b9c0d1`.

Em um banco SQL, o mais comum é encontrar uma coluna chamada `id`, com valores inteiros sequenciais, UUID ou outra chave definida no schema da tabela. Também haveria uma estrutura fixa de colunas e linhas, e não documentos com objetos aninhados e arrays.

A presença de `_id`, de subdocumentos como `fornecedor` e de arrays como `tags` indica uma modelagem orientada a documentos, típica do MongoDB.

## Conclusão

O identificador é `_id`. Isso indica MongoDB, ou pelo menos uma API que expõe documentos no formato do MongoDB. Nesta atividade, a API de demonstração lê um arquivo JSON local com documentos nesse formato, mas o critério analisado é o formato do JSON retornado: `_id` em vez de `id`.
