import express from "express";
import cors from "cors";
import produtosRoutes from "./rotas/produtos.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "API Express da Atividade 04.11",
    endpoints: ["GET /api/produtos", "GET /api/produtos/:id"],
  });
});

app.use("/api/produtos", produtosRoutes);

app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" });
});

app.use((erro, req, res, next) => {
  console.error(erro);
  res.status(500).json({ erro: "Erro interno do servidor" });
});

app.listen(PORT, () => {
  console.log(`API disponível em http://localhost:${PORT}/api/produtos`);
});
