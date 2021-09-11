const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema ({
    setup: {
        type: String,
        minlength: [10, "Joke too short..."]
    },
    punchline: {
        type: String,
        minlength: [3, "Try once more"]
    }
});

const Jokes = mongoose.model('Jokes', JokeSchema);

module.exports = Jokes;