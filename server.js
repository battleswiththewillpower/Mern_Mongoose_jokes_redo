// 1. imort all dependeinces
const express = require("express");
const app = express();
const port = 8000;



// 2.1 config express
require("./configs/mongoose.config")


// 2.2 config express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. routes & logic

const AllMyRoutes = require("./routes/joke_routes");
AllMyRoutes(app);


// 4. listen to the port
// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));