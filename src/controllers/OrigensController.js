const origens = require('../jsons/origens.json');
const util = require('../util');

module.exports = {
    getOrigens(req, res) {
        const mensagem = "Informações obtidas com sucesso!";
        const resposta = {
            "message": mensagem,
            "data": origens
        }
        return res.json(resposta);
    },
    getOrigensByName(req, res) {
        const origem = util.getDataByKey(origens, req, 'origem');
        const mensagem = origem.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma origem encontrada com este nome!";
        const resposta = {
            "message": mensagem,
            "data": origens[origem] ? origens[origem] : []
        }
        return res.json(resposta);
    }
};