//importa o express, a função do dbConnect e as rotas dos disposiivos 
import express from "express";
import conectaDB from "./src/dbConnect.js";
import dispositivosRoutes from "./src/routes/dispositivosRoutes.js";

const app = express();//Cria a aplicação Express
app.use(express.json());//Define a porta onde o servidor vai escutar, aqui estou usando 3000

//Inicia a conexão cmo o banco de dados
try {
    const conexao = await conectaDB();
    conexao.once("open", () => {
        console.log("Conectado ao banco de dados!");
    });
} catch (erro) {
    console.error("Erro ao conectar ao banco de dados: ", erro);
}

//Rota base para a API de dispositivos
app.use("/api/dispositivos", dispositivosRoutes);

// Iniciar o servidor e escuta na porta definida
app.listen(3000, () => {
    console.log("Servidor escutando!");
});
