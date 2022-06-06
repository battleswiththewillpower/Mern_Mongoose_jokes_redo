// otion 1
const Joke = require("./../models/jokes_model");

// // option 2
// const { Nameit } = require("./../models/name_model");

module.exports.getOne = (req, res) =>{
    Joke.findOne({_id : req.params.id})
        .then(newOne => res.json(newOne))
        .catch(err=> res.json(err))

}

//get all
module.exports.getAll = (req, res) =>{
    Joke.find()
        .then(all => res.json(all))
        .catch(err=> res.json(err))
}

// get one
// module.exports.getOne = (req, res) =>{
//     Joke.findOne({_id : req.params.id})
//         .then(newOne => res.json(newOne))
//         .catch(err=> res.json(err))

// }

//create one
module.exports.createOne = (req, res) =>{
    const jokes = req.body
    Joke.create(jokes)
        .then(joke => res.json(joke))
        .catch(err=> res.json(err))

}
// create another version
module.exports.createTwo = (req, res) =>{
    const jokes = new Joke(req.body)
    jokes.save()
        .then(joke => res.json(joke))
        .catch(err=> res.json(err))

}

// update information --- combo of getOne & create
module.exports.updateJoke = (req, res) =>{
    Joke.findOneAndUpdate(
        //get the criteria
        {_id: req.params.id},
        //update the values
        req.body,
        //options
        {new: true, runValidators: true}
    )
    //pass in as response for .then so it wont confuse it with the other functions
        .then(response => res.json(response))
        .catch(err => res.json(err))

}

// delete it
module.exports.deleteJoke = (req, res) =>{
    Joke.deleteOne({_id: req.params.id})
        .then(status => res.json(status))
        .catch(err => res.json(err))
}
