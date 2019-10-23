const divindades = require('../jsons/divindades.json');
const util = require('../util');

module.exports = {
    getDivindades(req, res) {

        const mensagem = "Informações obtidas com sucesso!";
        const resposta = {
            "message": mensagem,
            "data": divindades
        }
        return res.json(resposta);
    },
    getDivindadesByName(req, res) {
        const divindade = util.getDivindadeByKey(divindades, req);
        const mensagem = divindade.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma divindade encontrada com este nome!";
        const resposta = {
            "message": mensagem,
            "data": divindades[divindade] ? divindades[divindade] : []
        }
        return res.json(resposta);
    },    
    // getPericiasdivindade(req, res) {
    //     const divindade = util.getDivindadesByKey(divindades, req);
    //     const mensagem = divindade.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma divindade encontrada com este nome!";

    //     const resposta = {
    //         "message": mensagem,
    //         "divindade": divindade[0],
    //         "data": divindades[divindade].pericias != null ? divindades[divindade].pericias : []
    //     }
    //     return res.json(resposta);
    // }
};