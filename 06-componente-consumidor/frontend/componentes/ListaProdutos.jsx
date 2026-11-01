import { useEffect, useState } from "react";
import { buscarProdutos } from "../servicos/produtos.js";

const formatarPreco = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const carregar = async () => {
      setCarregando(true);
      setErro("");

      try {
        const dados = await buscarProdutos(controller.signal);
        setProdutos(dados);
      } catch (falha) {
        if (falha.name !== "AbortError") {
          setErro(falha.message || "Não foi possível carregar os produtos.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false);
        }
      }
    };

    carregar();

    return () => controller.abort();
  }, []);

  if (carregando) {
    return (
      <section className="estado" aria-live="polite">
        <p>Carregando produtos...</p>
      </section>
    );
  }

  if (erro) {
    return (
      <section className="estado estado--erro" role="alert">
        <p>{erro}</p>
        <button type="button" onClick={() => window.location.reload()}>
          Tentar novamente
        </button>
      </section>
    );
  }

  if (produtos.length === 0) {
    return (
      <section className="estado" aria-live="polite">
        <p>Nenhum produto encontrado.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Produtos disponíveis</h2>
      <ul className="lista">
        {produtos.map((item) => (
          <li className="card" key={item._id ?? item.id}>
            <h3>{item.produto}</h3>
            <p className="preco">{formatarPreco(item.preco)}</p>
            <p className="fornecedor">
              {item.fornecedor?.nome} · {item.fornecedor?.cidade}
            </p>
            <ul className="tags">
              {item.tags?.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
