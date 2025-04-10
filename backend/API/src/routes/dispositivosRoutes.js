//Import o express e o controller
import express from "express";
import dispositivosController from "../controller/dispositivosController.js";

//Cria uma instancia do roteador
const router = express.Router();

//Define as rotas da API e o métodos do controller que vão usa-las
router.get("/", dispositivosController.listarDispositivos);//Lista os dispositivos
router.post("/", dispositivosController.criarDispositivo);//Cadastra os dispositivos
router.put("/:id", dispositivosController.atualizaDispositivo);//Atualiza os dispositivos
router.delete("/:id", dispositivosController.deletarDispositivo);//Deleta os dispositivos
router.get("/:id", dispositivosController.listarDispositivosPorId);//Lista os dispositivos por id

//Exporta o roteador para ser usado no index.js
export default router;
