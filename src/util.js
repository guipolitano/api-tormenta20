module.exports = {
    getDataById(data, req) {
        return Object.keys(data).filter(key => data[key].id === req.params.id);
    },
    getClasseByKey(data, req) {
        return Object.keys(data).filter(key => key === req.params.classe);
    },
    getDivindadeByKey(data, req) {
        return Object.keys(data).filter(key => key === req.params.divindade);
    },
    getRacaByKey(data, req) {
        return Object.keys(data).filter(key => key === req.params.raca);
    },
    getDataByClasse(data, req) {
        return Object.entries(data).filter(([key, value]) => value.classe === req.params.classe);
    },
}