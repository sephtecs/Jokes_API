const JokesController = require("../controllers/jokes.controller");
const Jokes = require("../models/jokes.model");

module.exports = app => {
    app.get("/api/jokes/random", JokesController.findRandom);
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/:_id", JokesController.findOneJoke);
    app.post("/api/jokes/new", JokesController.createJokes);
    app.put("/api/jokes/update/:_id", JokesController.updateJokes);
    app.delete("/api/jokes/delete/:_id", JokesController.deleteJoke);
} 