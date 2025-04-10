//Importa o Mongoose para conexão com banco de dados
import mongoose from "mongoose";

//Define a estrutura do dispositivo
const dispositivoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mac: { type: String , required: true},
    email: {type: String },
    timestamp: { type: Date, default: Date.now }
}, {
    versionKey: false
});

//Cria o model "Disostivo" com base na estrutura
const Dispositivo = mongoose.model("Dispositivo", dispositivoSchema);

//Exporta o model para ser usado no controller
export default Dispositivo;
