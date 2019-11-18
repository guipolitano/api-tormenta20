module.exports = {
    getDataById(data, req) {
        return Object.keys(data).filter(key => data[key].id === req.params.id);
    },
    getDataByKey(data, req, option) {
        return Object.keys(data).filter(key => key === (req.params[option]).toLowerCase());
    },    
    getDataByClasse(data, req) {
        return Object.entries(data).filter(([key, value]) => value.classe === (req.params.classe).toLowerCase());
    },
    getDataByTipo(data, req) {
        return Object.entries(data).filter(([key, value]) => value.tipo === (req.params.tipo).toLowerCase());
    },
}