import { Router } from "express";
import { buscarProdutoPorId, listarProdutos } from "../controladores/produtos.controller.js";

const router = Router();

router.get("/", listarProdutos);
router.get("/:id", buscarProdutoPorId);

export default router;
