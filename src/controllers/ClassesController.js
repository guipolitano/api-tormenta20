const classes = require('../jsons/classes.json');
const util = require('../util');

module.exports = {
    getClasses(req, res) {

        const mensagem = "Informações obtidas com sucesso!";
        const resposta = {
            "message": mensagem,
            "data": classes
        }
        return res.json(resposta);
    },
    getClassesById(req, res) {
        const classe = util.getDataById(classes, req);
        const mensagem = classe.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma classe encontrada com este ID!";
        const resposta = {
            "message": mensagem,
            "data": classes[classe] ? classes[classe] : []
        }
        return res.json(resposta);
    },
    getHabilidadesClasse(req, res) {
        const classe = util.getDataById(classes, req);
        const mensagem = classe.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma classe encontrada com este ID!";

        const resposta = {
            "message": mensagem,
            "classe": classe[0],
            "data": classes[classe] ? classes[classe].habilidades : []
        }
        return res.json(resposta);
    },
    getTabelaNivel(req, res) {
        const classe = util.getDataById(classes, req);
        const mensagem = classe.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma classe encontrada com este ID!";

        const resposta = {
            "message": mensagem,
            "classe": classe[0],
            "data": classes[classe] ? classes[classe].tabela : []
        }
        return res.json(resposta);
    },
    getProeficienciasClasse(req, res) {
        const classe = util.getDataById(classes, req);
        const mensagem = classe.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma classe encontrada com este ID!";

        const resposta = {
            "message": mensagem,
            "classe": classe[0],
            "data": classes[classe].proeficiencias != null ? classes[classe].proeficiencias : []
        }
        return res.json(resposta);
    }
};