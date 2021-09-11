// every single project has this:
const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");
// require("./server/routes/jokes.route")(app);

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./server/routes/jokes.routes")(app);

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );