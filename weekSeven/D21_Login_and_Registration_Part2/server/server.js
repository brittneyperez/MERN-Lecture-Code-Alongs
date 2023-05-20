const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser')

const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true })); // ? this code allows JSON objects to be posted with strings and arrays
app.use(cors({ credentials: true, origin:'http://localhost:3000' })); // ? to be able to POST registration, we need the following parameters
app.use(cookieParser()); // ? this will generate a cookie upon POST data

require('./config/mongoose.config'); // calling mongoose.config => runs CONNECT function
require('dotenv').config()

require('./routes/user.routes')(app); // "app" is the parameter we're calling to access the routes in the function
/* Short-hand notation for the code below:
    const UserRoutes = require("./routes/user.routes");
    UserRoutes(app)
*/

app.listen(port, () => console.log(`Listening on port: ${port}`));
