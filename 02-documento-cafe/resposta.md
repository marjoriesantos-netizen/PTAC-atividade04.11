# 2. Documento café

Documento analisado:

```json
{
  "_id": "abc123",
  "produto": "Café",
  "preco": 12.5,
  "tags": ["quente", "manhã"],
  "fornecedor": {
    "nome": "CoopeCafé",
    "cidade": "Dourados"
  }
}
```

## (a) O `_id`

```text
abc123
```

O `_id` é o identificador único do documento. Nesse exemplo ele é uma string. Em documentos criados automaticamente pelo MongoDB, normalmente seria um `ObjectId` de 24 caracteres hexadecimais.

## (b) Os subdocumentos

O único subdocumento é `fornecedor`:

```json
{
  "nome": "CoopeCafé",
  "cidade": "Dourados"
}
```

Ele é um documento embutido dentro do documento principal. Os campos `nome` e `cidade` pertencem ao fornecedor, e não ao nível raiz.

## (c) Os arrays

O array é `tags`:

```json
["quente", "manhã"]
```

Ele contém duas strings. Os demais campos são escalares ou objetos: `_id` e `produto` são strings, `preco` é um número e `fornecedor` é um subdocumento.

## Resumo

| Item | Resposta |
|---|---|
| `_id` | `abc123` |
| Subdocumento | `fornecedor` |
| Array | `tags` |
