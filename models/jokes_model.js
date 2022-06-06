const mongoose = require("mongoose")


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        // if left blank will give error
        required: [true, "title is required"],
        // set a minium length
        minLength: [10, "title must be least 10 characters"]

    },

    punchline: {
        type: String,
        // if left blank will give error
        required: [true, "title is required"],
        // set a minium length
        minLength: [5, "title must be least 5 characters"]
    }


}, {timestamps: true})



module.exports = mongoose.model('Joke', JokeSchema);
// const Joke = mongoose.model("Joke",jokeSchema)
// //option 1
// module.exports = Joke;

// //option 2
// module.exports.Nameit = monogoose.model("Nameit",nameThisSchema)