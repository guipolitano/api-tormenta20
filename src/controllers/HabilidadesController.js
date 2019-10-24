const habilidades = require('../jsons/habilidades.json');
const util = require('../util');

module.exports = {
    getHabilidades(req, res) {
        const mensagem = "Informações obtidas com sucesso!";
        const resposta = {
            "message": mensagem,
            "data": habilidades
        }
        return res.json(resposta);
    },
    getHabilidadesByName(req, res) {
        const habilidade = util.getDataByKey(habilidades, req, 'habilidade');
        const mensagem = habilidade.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma habilidade encontrada com este ID!";        
        const resposta = {
            "message": mensagem,
            "data": habilidades[habilidade] ? habilidades[habilidade] : []
        }
        return res.json(resposta);
    },
    getHabilidadesByClasse(req, res) {
        const habilidade = util.getDataByClasse(habilidades, req);
        const mensagem = habilidade.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma habilidade encontrada para esta classe!";
        const resposta = {
            "message": mensagem,
            "data": habilidade ? habilidade : []
        }
        return res.json(resposta);
    },
};