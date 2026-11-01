# 6. Componente consumidor

## Objetivo

Consumir a listagem da API Express em `http://localhost:3000/api/produtos` e renderizar os produtos com tratamento de carregando, erro e vazio.

## Arquivo do componente

O componente principal está em:

```text
frontend/componentes/ListaProdutos.jsx
```

A chamada `fetch` está isolada em:

```text
frontend/servicos/produtos.js
```

## Estados tratados

| Estado | Como aparece na tela |
|---|---|
| Carregando | Exibe `Carregando produtos...` enquanto a requisição está em andamento |
| Erro | Exibe a mensagem de falha e o botão `Tentar novamente` |
| Vazio | Exibe `Nenhum produto encontrado.` quando o array retorna sem itens |
| Sucesso | Renderiza a lista de produtos com nome, preço, fornecedor e tags |

O componente também usa `AbortController` para cancelar a requisição quando o componente é desmontado e valida se a resposta da API é realmente um array.

## Chave da lista

Cada item é renderizado com a chave exigida:

```jsx
key={item._id ?? item.id}
```

Assim, o componente funciona tanto com documentos do MongoDB, que usam `_id`, quanto com APIs que usam `id`.

## Como rodar

Terminal 1, na pasta da API:

```bash
cd api-express
npm install
npm run dev
```

Terminal 2, na pasta do componente:

```bash
cd 06-componente-consumidor
npm install
npm run dev
```

Acesse:

```text
http://localhost:5173
```

## Estrutura

```text
06-componente-consumidor/
├── index.html
├── package.json
├── vite.config.js
└── frontend/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── componentes/
    │   └── ListaProdutos.jsx
    └── servicos/
        └── produtos.js
```
