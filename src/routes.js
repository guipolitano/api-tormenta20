
const express = require('express');
const ClassesController = require('./controllers/ClassesController');
const RacasController = require('./controllers/RacasController');
const HabilidadesController = require('./controllers/HabilidadesController');
const routes = express.Router();

//Classes
routes.get("/api/classes", ClassesController.getClasses);
routes.get("/api/classes/:id", ClassesController.getClassesById);
routes.get("/api/classes/:id/habilidades", ClassesController.getHabilidadesClasse);
routes.get("/api/classes/:id/tabela-nivel", ClassesController.getTabelaNivel);
routes.get("/api/classes/:id/proeficiencias", ClassesController.getProeficienciasClasse);

//Habilidades
routes.get("/api/habilidades", HabilidadesController.getHabilidades);
routes.get("/api/habilidades/:id", HabilidadesController.getHabilidadesById);
routes.get("/api/habilidades/classe/:classe", HabilidadesController.getHabilidadesByClasse);

//Racas
routes.get("/api/racas", RacasController.getRacas);
routes.get("/api/racas/:id", RacasController.getRacasById);
// routes.get("/api/classes/:id/habilidades", ClassesController.getHabilidadesClasse);

module.exports = routes;