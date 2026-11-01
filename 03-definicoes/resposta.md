# 3. Definições

## O que é coleção?

Coleção é o agrupamento de documentos dentro de um banco MongoDB. Ela exerce um papel parecido com o da tabela em um banco relacional: organiza dados do mesmo tipo para consulta e manipulação.

A diferença principal é que a coleção armazena documentos BSON, que podem ter estruturas diferentes entre si. Por exemplo, uma coleção `produtos` pode conter um documento com `estoque` e outro com `volumeMl`, sem exigir que os dois tenham exatamente os mesmos campos.

Uma coleção pertence a um banco de dados. O caminho conceitual é:

```text
Banco de dados → Coleção → Documento → Campo
```

## O que é schemaless?

Schemaless significa que o banco não exige um schema rígido, isto é, não obriga todos os documentos de uma coleção a terem os mesmos campos, os mesmos tipos e a mesma quantidade de propriedades.

Exemplo de dois documentos na mesma coleção:

```json
{
  "_id": "65f1a2b3c4d5e6f7a8b9c0d1",
  "produto": "Café",
  "preco": 12.5
}
```

```json
{
  "_id": "65f1a2b3c4d5e6f7a8b9c0d2",
  "produto": "Pão de Queijo",
  "preco": 8.9,
  "estoque": 42,
  "fornecedor": {
    "nome": "Padaria Central",
    "cidade": "Campo Grande"
  }
}
```

O primeiro documento não possui `estoque` nem `fornecedor`, e isso é permitido. A flexibilidade não significa ausência total de regras: a aplicação ainda pode validar os dados com ferramentas como Mongoose, Zod ou JSON Schema. O que não existe é a obrigatoriedade de uma tabela com colunas fixas no banco.
