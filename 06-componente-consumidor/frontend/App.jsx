import ListaProdutos from "./componentes/ListaProdutos.jsx";

export default function App() {
  return (
    <main className="app">
      <header className="cabecalho">
        <p className="etiqueta">Atividade 04.11</p>
        <h1>API Express + React</h1>
        <p>Lista de produtos com estados de carregando, erro e vazio.</p>
      </header>
      <ListaProdutos />
    </main>
  );
}
