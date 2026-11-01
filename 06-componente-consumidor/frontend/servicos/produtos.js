const API_URL = "http://localhost:3000/api/produtos";

export const buscarProdutos = async (signal) => {
  const resposta = await fetch(API_URL, { signal });

  if (!resposta.ok) {
    throw new Error(`Falha ao carregar os produtos (HTTP ${resposta.status}).`);
  }

  const dados = await resposta.json();

  if (!Array.isArray(dados)) {
    throw new Error("A API não retornou uma lista de produtos.");
  }

  return dados;
};
