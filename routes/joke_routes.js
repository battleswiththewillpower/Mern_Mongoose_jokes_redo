const NameitController = require("./../controllers/jokes_controller")


module.exports = (app) => {
    app.get("/api/jokes/random", NameitController.getOne) //GET RANDOM TO WORK
    app.get("/api/jokes", NameitController.getAll)
    app.post("/api/jokes/create", NameitController.createOne)
    app.get("/api/jokes/:id", NameitController.getOne)
    app.put("/api/jokes/update/:id", NameitController.updateJoke)
    app.delete("/api/jokes/delete/:id", NameitController.deleteJoke)
}

// module.exports = (app) => {
//     app.get("/api", (req, res) => {
//         res.json({ message: "Ashley for the Win$$$$$$" }, NameitController.getOne);
//     });
// }