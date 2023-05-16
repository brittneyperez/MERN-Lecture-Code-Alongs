const express = require('express');
const app = express();
const port = 8000;

require('./config/mongoose.config'); // calling the mongoose.config and running the connect function

app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/tvshow.routes')(app); // "app" is the parameter we're calling to access the routes in the function
/* This is the short-hand notation for the code below:
    const TvShowRoutes = require("./routes/tvshow.routes");
    TvShowRoutes(app)
*/

app.listen(port, () => console.log(`Listening on port ${port}`));