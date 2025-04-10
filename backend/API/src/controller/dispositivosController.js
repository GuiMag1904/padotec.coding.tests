// Importa o model de Dispositivo
import Dispositivo from "../model/dispositivo.js";

// Controlador com todos os métodos que tratam as requisições da API
const dispositivosController = {
    // Lista todos os dispositivos cadastrados
    async listarDispositivos(req, res) {
        try {
            const dispositivos = await Dispositivo.find();//Busca todos documentos na coleção
            res.status(200).json(dispositivos);//Retorna os dados com status 200
        } catch (erro) {
            res.status(500).json({ mensagem: "Erro ao listar dispositivos", erro });//Se der erro retorna qual erro aconteceu
        }
    },

    //Lista um dispositivo procurado por id
    async listarDispositivosPorId(req, res) {
        try {
            const dispositivoId = await Dispositivo.findById(req.params.id);//Busca pelo id na url
            res.status(200).json(dispositivoId);//Retorna o dispositivo que encontrou
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao buscar dispositivo", erro });//Se der erro retorna qual erro aconteceu
        }
    },

    //Cria um novo dispositivo
    async criarDispositivo(req, res) {
        try {
            const { mac } = req.body;//Pega o mac do corpo da requisição

            //Verifica se já existe outro dispositivo com este mac
            const macIgual = await Dispositivo.findOne({ mac });
            if(macIgual) {
                return res.status(500).json({ mensagem: "Já existe um dispositivo com este MAC" });
            }

            const novoDispositivo = await Dispositivo.create(req.body);//Cria e salva o novo dispositivo
            //Retorna o id e o mac do dispositivo
            res.status(201).json({
                _id: novoDispositivo._id,
                mac: novoDispositivo.mac
            });
        } catch (erro) {
            res.status(500).json({ mensagem: "Erro ao criar dispositvo", erro });//Se der erro retorna qual erro aconteceu
        }
    },

    //Atualiza um dispositivo que já existe
    async atualizaDispositivo(req, res) {
        try {
            const atualido = await Dispositivo.findByIdAndUpdate(req.params.id, req.body, {new: true} );//Pega o id do dispositivo, envia o novo valor e retorna o documento atualizado
            res.status(200).json(atualido); //Retorna o objeto atualizado
        } catch(erro) {
            res.status(500).json({ erro: "Erro ao atualizar dispositivo", erro });//Se der erro retorna qual erro aconteceu
        }
    },

    //Deleta um dispositivo
    async deletarDispositivo(req, res) {
        try {
            await Dispositivo.findByIdAndDelete(req.params.id);//Pega o id do dispositivo e deleta
            res.status(203).json({ mensagem: "Dispositivo deletado com sucesso" });//Retorna se deletou com sucesso
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao deletar dispositivo", erro });//Se der erro retorna qual erro aconteceu
        }
    }
};

//Exporta o controller para ser usado nas rotas
export default dispositivosController;
