const pericias = require('../jsons/pericias.json');
const util = require('../util');

module.exports = {
    getPericias(req, res) {
        const mensagem = "Informações obtidas com sucesso!";
        const resposta = {
            "message": mensagem,
            "data": pericias
        }
        return res.json(resposta);
    },
    getPericiasByName(req, res) {
        const pericia = util.getDataByKey(pericias, req, 'pericia');
        const mensagem = pericia.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma perícia encontrada com este nome!";
        const resposta = {
            "message": mensagem,
            "data": pericias[pericia] ? pericias[pericia] : []
        }
        return res.json(resposta);
    }
};