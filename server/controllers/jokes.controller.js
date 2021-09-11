const Jokes = require("../models/jokes.model");

//All Jokes
module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allmyjokes => res.json({jokes: allmyjokes}))
        .catch(err => res.json({message: "Boooooo!!", error: err}))
}

//One Joke
module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({_id: req.params._id})
        .then(oneJoke => res.json({jokes: oneJoke}))
        .catch(err => res.json({message: "Boooooo!!", error: err}))
}

//Create Joke
module.exports.createJokes = (req, res) => {
    Jokes.create(req.body)
        .then(newJoke => res.json({jokes: newJoke}))
        .catch(err => res.status(400).json(err));
}

//Update Joke
module.exports.updateJokes = (req, res) => {
    Jokes.updateOne({_id: req.params._id}, {
        $set: {
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    })
    .then(oneJoke => res.json({jokes: oneJoke}))
    .catch(err => res.status(400).json(err));
}

//Delete Joke
module.exports.deleteJoke = (req, res) => {
    Jokes.remove({_id: req.params._id})
        .then(del => res.json({message: "Deleted joke"}))
        .catch(err => res.status(400).json(err));
}

//Random Joke
module.exports.findRandom = (req, res) => {
    Jokes.find()
        .then(allmyjokes => {
            let rand = Math.floor(Math.random()*Jokes.length);
            res.json({jokes: allmyjokes[rand]});
        }) 
        .catch(err => res.json({message: "Joke did not work", error: err}))
}