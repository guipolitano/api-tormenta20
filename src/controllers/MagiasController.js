const magias = require("../jsons/magias.json");
const util = require("../util");

module.exports = {
  getRacas(req, res) {
    const mensagem = "Informações obtidas com sucesso!";
    const resposta = {
      message: mensagem,
      data: magias,
    };
    return res.json(resposta);
  },
  getMagiasByName(req, res) {
    const magia = util.getDataByKey(racas, req, "raca");
    const mensagem =
      magia.length > 0
        ? "Informações obtidas com sucesso!"
        : "Nenhuma magia encontrada com este nome!";

    const resposta = {
      message: mensagem,
      data: magias[magia] ? magias[magia] : [],
    };
    return res.json(resposta);
  },
};
