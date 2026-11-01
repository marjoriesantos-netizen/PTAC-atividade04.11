import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const arquivoProdutos = path.join(__dirname, "../dados/produtos.json");

const carregarProdutos = async () => {
  const conteudo = await readFile(arquivoProdutos, "utf-8");
  return JSON.parse(conteudo);
};

export const listarProdutos = async (req, res, next) => {
  try {
    const produtos = await carregarProdutos();
    return res.status(200).json(produtos);
  } catch (erro) {
    return next(erro);
  }
};

export const buscarProdutoPorId = async (req, res, next) => {
  try {
    const produtos = await carregarProdutos();
    const produto = produtos.find((item) => item._id === req.params.id);

    if (!produto) {
      return res.status(404).json({ erro: "Produto não encontrado" });
    }

    return res.status(200).json(produto);
  } catch (erro) {
    return next(erro);
  }
};
