//Importa o Mongoose para a conexão com o banco
import mongoose from "mongoose";

//função para conectar o banco de dados
async function conectaDB() {
    const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/CadastroDispositivos";//Usa a url definida na variável de ambiente
    const conexao = await mongoose.connect(mongoURL);//Realiza a conexão com o banco
    return mongoose.connection;//Retorna a conexão ativa
}

//Exporta a função para ser usada no index.js
export default conectaDB;
