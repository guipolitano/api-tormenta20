const talentos = require('../jsons/talentos.json');
const util = require('../util');

module.exports = {
    getTalentos(req, res) {
        const mensagem = "Informações obtidas com sucesso!";
        const resposta = {
            "message": mensagem,
            "data": talentos
        }
        return res.json(resposta);
    },
    getTalentosByName(req, res) {
        const talento = util.getDataByKey(talentos, req, 'talento');
        const mensagem = talento.length > 0 ? "Informações obtidas com sucesso!" : "Nenhum talento encontrada com este ID!";        
        const resposta = {
            "message": mensagem,
            "data": talentos[talento] ? talentos[talento] : []
        }
        return res.json(resposta);
    },
    getTalentosByTipo(req, res) {
        const talento = util.getDataByTipo(talentos, req);
        const mensagem = talento.length > 0 ? "Informações obtidas com sucesso!" : "Nenhum talento encontrado para este Tipo!";
        const resposta = {
            "message": mensagem,
            "data": talento ? talento : []
        }
        return res.json(resposta);
    },
};