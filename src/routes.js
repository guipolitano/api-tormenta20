const jsonClasses = require('./jsons/classes');
const express = require('express');
const routes = express.Router();
const { classes } = jsonClasses;

routes.get("/api/classes", (req, res) => {
  return res.json(classes);
});

routes.get("/api/classes/:id", (req, res) => {
    
    const classe = Object.keys(classes)
        .filter((key)=> {
            return classes[key].id === req.params.id;
        });
    return res.json(classe);
});

module.exports = routes;