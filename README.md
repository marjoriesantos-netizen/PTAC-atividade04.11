# PTAC - Atividade 04.11

Atividades sobre identificação de banco, documentos MongoDB, definições, vantagens, URL de acesso, componente consumidor React e análise de API.

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `01-identificar-banco` | Identificação do banco pelo JSON da API |
| `02-documento-cafe` | Análise do documento de exemplo |
| `03-definicoes` | Conceitos de coleção e schemaless |
| `04-vantagens` | Vantagens de SQL e MongoDB |
| `05-url-acesso` | URL completa da API Express |
| `06-componente-consumidor` | Aplicação React que consome a API |
| `07-detetive-api` | Justificativa técnica sobre o banco usado |
| `api-express` | API Express usada nas atividades |

## API Express

```bash
cd api-express
npm install
npm run dev
```

No navegador, acesse:

```text
http://localhost:3000/api/produtos
```

A resposta é uma lista de documentos com `_id` no formato ObjectId do MongoDB.

## Componente React

Com a API em execução, abra outro terminal:

```bash
cd 06-componente-consumidor
npm install
npm run dev
```

Acesse:

```text
http://localhost:5173
```

## Execução pela raiz

```bash
npm run install:all
npm run api
npm run web
```

## Critério de sucesso

- A API Express responde em `http://localhost:3000/api/produtos`.
- O JSON retorna documentos com `_id`.
- O componente React exibe carregando, erro e vazio, e usa `key={item._id ?? item.id}`.
