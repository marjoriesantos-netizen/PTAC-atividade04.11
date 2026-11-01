# 7. Detetive de API

## Evidências encontradas

Um JSON com `_id` de 24 caracteres hexadecimais e campos variáveis apresenta características típicas de uma API conectada ao MongoDB.

### 1. `_id` de 24 hexadecimais

O MongoDB utiliza `_id` como chave primária padrão dos documentos. Quando o valor é gerado automaticamente, ele costuma ser um `ObjectId`, cuja representação tem 24 caracteres hexadecimais, por exemplo:

```text
65f1a2b3c4d5e6f7a8b9c0d1
```

O `ObjectId` carrega informações como timestamp de criação e componentes de unicidade. Em bancos SQL, o identificador normalmente aparece como `id`, podendo ser `INT`, `BIGINT`, `SERIAL` ou `UUID`, e não como `_id` com esse formato.

### 2. Campos variáveis entre documentos

Se um documento possui `estoque`, outro possui `volumeMl` e outro possui `cobertura`, sem todos terem as mesmas colunas, isso é compatível com o modelo schemaless do MongoDB. Em uma tabela SQL, a estrutura de colunas é fixa: os campos existiriam para todas as linhas, mesmo que alguns valores fossem `NULL`.

### 3. Subdocumentos e arrays

Objetos aninhados, como `fornecedor: { nome, cidade }`, e arrays, como `tags: ["quente", "manhã"]`, são armazenados naturalmente em documentos BSON. No modelo relacional, esses dados costumam ser distribuídos em tabelas separadas e reconstruídos com `JOIN`.

### 4. Ausência de estrutura de tabela

O JSON retorna documentos completos, sem metadados de tabela, colunas ou chaves estrangeiras. A API parece apenas serializar documentos de uma coleção.

## Conclusão

O backend provavelmente usa MongoDB. As evidências mais fortes são o `_id` no formato `ObjectId` de 24 hexadecimais e a presença de documentos com campos variados, subdocumentos e arrays.

Uma ressalva: o formato do JSON sozinho não prova a tecnologia do servidor, pois uma API SQL também poderia renomear `id` para `_id`. Porém, o conjunto de sinais — `_id` no padrão do MongoDB, estrutura flexível e dados aninhados — torna o MongoDB a explicação mais provável.
