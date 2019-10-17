module.exports = {
    getDataById(data, req) {
        return Object.keys(data).filter(key => data[key].id === req.params.id);
    },
    getDataByClasse(data, req) {
        return Object.entries(data).filter(([key, value]) => value.classe === req.params.classe);
    },
}