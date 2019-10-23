
const express = require('express');
const ClassesController = require('./controllers/ClassesController');
const RacasController = require('./controllers/RacasController');
const HabilidadesController = require('./controllers/HabilidadesController');
const DivindadesController = require('./controllers/DivindadesController');
const routes = express.Router();

//Classes
routes.get("/api/classes", ClassesController.getClasses);
routes.get("/api/classes/:classe", ClassesController.getClassesByName);
routes.get("/api/classes/:classe/habilidades", ClassesController.getHabilidadesClasse);
routes.get("/api/classes/:classe/tabela-nivel", ClassesController.getTabelaNivel);
routes.get("/api/classes/:classe/proeficiencias", ClassesController.getProeficienciasClasse);
routes.get("/api/classes/:classe/pericias", ClassesController.getPericiasClasse);

//Divindades
routes.get("/api/divindades", DivindadesController.getDivindades);
routes.get("/api/divindades/:divindade", DivindadesController.getDivindadesByName);

//Habilidades
routes.get("/api/habilidades", HabilidadesController.getHabilidades);
routes.get("/api/habilidades/:id", HabilidadesController.getHabilidadesById);
routes.get("/api/habilidades/classe/:classe", HabilidadesController.getHabilidadesByClasse);

//Racas
routes.get("/api/racas", RacasController.getRacas);
routes.get("/api/racas/:raca", RacasController.getRacasByName);
// routes.get("/api/classes/:id/habilidades", ClassesController.getHabilidadesClasse);

module.exports = routes;