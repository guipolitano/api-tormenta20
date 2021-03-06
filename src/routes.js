
const express = require('express');
const ClassesController = require('./controllers/ClassesController');
const RacasController = require('./controllers/RacasController');
const HabilidadesController = require('./controllers/HabilidadesController');
const DivindadesController = require('./controllers/DivindadesController');
const PericiasController = require('./controllers/PericiasController');
const OrigensController = require('./controllers/OrigensController');
const TalentosController = require('./controllers/TalentosController');
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
routes.get("/api/habilidades/:habilidade", HabilidadesController.getHabilidadesByName);
routes.get("/api/habilidades/classe/:classe", HabilidadesController.getHabilidadesByClasse);

//Origens
routes.get("/api/origens", OrigensController.getOrigens);
routes.get("/api/origens/:origem", OrigensController.getOrigensByName);

//Pericias
routes.get("/api/pericias", PericiasController.getPericias);
routes.get("/api/pericias/:pericia", PericiasController.getPericiasByName);
// routes.get("/api/classes/:id/habilidades", ClassesController.getHabilidadesClasse);

//Racas
routes.get("/api/racas", RacasController.getRacas);
routes.get("/api/racas/:raca", RacasController.getRacasByName);

//Talentos
routes.get("/api/talentos", TalentosController.getTalentos);
routes.get("/api/talentos/:talento", TalentosController.getTalentosByName);
routes.get("/api/talentos/tipo/:tipo", TalentosController.getTalentosByTipo);

module.exports = routes;