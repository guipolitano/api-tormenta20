const racas = require('../jsons/racas.json');
const util = require('../util');

module.exports = {
    getRacas(req, res){        
        const mensagem = "Informações obtidas com sucesso!";
        const resposta = {
            "message": mensagem,
            "data": racas
        }
        return res.json(resposta);
    },
    getRacasByName(req, res){        
        const raca = util.getRacaByKey(racas, req);
        const mensagem = raca.length > 0 ? "Informações obtidas com sucesso!" : "Nenhuma raça encontrada com este nome!";

        const resposta = {
            "message": mensagem,
            "data": racas[raca] ? racas[raca] : []
        }
        return res.json(resposta);
    },
    // getHabilidadesClasse(req, res) {
    //     const classe = Object.keys(racas)
    //         .filter((key) => {
    //             return racas[key].id === req.params.id;
    //         });
    //     return res.json(racas[classe].habilidades);
    // }
};