２０２３年０５月０２日　（火）
---

### Recap
- Intro to back-end server folder

## **Topics to Cover**
- MongoDB
- SQL vs NoSQL (Structured vs Semi-Structured)
- Server Folder Modularization

### Notes
To use MongoDB and Node, the library **_Mongoose_** will be needed as it connects directly to our project and gives more structure to our data with the addition of models and schemas.

Mongoose acts as a layer between our application and database, enabling us to validate and run complex queries more effectively.

1. ### **Installing Mongoose**
    Inside the project directory, create a **server** folder and complete the following structure:
    - **server**: the backend server; holds all server related files
        - **config**: handles the database configuration and connection
        - **controllers**: holds all logic for each model (i.e., creating, updating, etc.)
        - **models**: holds all the schemas
        - **routes**: handles all of our routes for each model
        - `server.js`: handles all the server logic with **Express**
    
    Once the `server.js` files and the folders are created, open a new terminal window and navigate into the project folder (i.e., **server**) and install the server dependencies:
    ```
    npm init -y
    npm install express mongoose
    ```
    In any file requiring the Mongoose library, we need to be sure to `require` it at the top of the file:
    ```js
    const mongoose = require('mongoose');
    ```


    2. ### **Connecting to MongoDB with Mongoose**
    Navigate to the **`config`** folder and create the `mongoose.config.js` file. This is where we use mongoose to connect MongoDB. Mongoose has a super convenient connect method—`mongoose.connect`!
    ```js
    const mongoose = require('mongoose');
    
    mongoose.connect('mongodb://127.0.0.1:27017/name_of_your_DB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Established a connection to the database'))
        .catch(err => console.log('Something went wrong when connecting to the database ', err));
    ```
    **Note: The useNewUrlParser and useUnifiedTopology are options we pass to get rid of deprecation messages in our terminal.**

    **Note: If you connect to a database that doesn't exist, Mongoose will create the DB for you as soon as you create your first document!**
    
    3. ### **Create your Mongoose Schema and Model**
    Mongoose provides more structure to MongoDB by adding schemas that we can create that turn into models for our collections. These models specify keys, types, and even validations for documents in a specific collection. Mongoose also handles appropriate naming for us when it communicates with MongoDB.
    
    Navigate your way to the **`models`** folder and create the `user.model.js` file in the models folder where we create a User collection using mongoose. Remember, we need to import mongoose using the require statement at the top of the file.
    ```js
    const mongoose = require('mongoose');

    const UserSchema = new mongoose.Schema({
        name: {
            type: String
        },
        age: {
            type: Number
        }
    });
    
    const User = mongoose.model('User', UserSchema);
    
    module.exports = User;
    ```
    _What does the above code mean?_ The **`mongoose.model()`** method is the most important in this case. 
    - Its job is to take a blueprint object and, in turn, create the necessary database collection out of the model. We get this blueprint by making a new schema instance from the `mongoose.Schema()` object constructor. Notice how the `mongoose.Schema()` method takes an object as its parameter? The structure of that object is how each new document put into the collection will be formatted. 
    - We then create a `User` variable to export and set it to the returned value of the `mongoose.model()` function: a model object is created using the singular version of the collection name ('User') and the mongoose schema (`UserSchema`). This model will be used to enable all our needed CRUD functionality. Exporting the User variable will allow us to import and use the User model in any file we choose.
    
    **NOTE: After we create our first document using this model, we will find a lowercase, plural version of the collection name in our database. In this case, "users"**
    
    4. ### **Use the Mongoose Models to Create / Retrieve / Update / Destroy**
    Navigate your way into the **`controllers`** folder and create the `user.controller.js` file that will house all of our logic for **creating**, **retrieving**, **updating**, and **deleting** users. Notice at the top of the file, we do not have a `require("mongoose")` statement. Instead we have a **`require("../models/user.model")`** statement which is importing the User variable that we exported from the `user.model.js` file. In our controller file, we export different functions that perform the basic CRUD operations using our User model.
    ```js
    const User = require('../models/user.model');

    module.exports.findAllUsers = (req, res) => {
        User.find()
            .then((allDaUsers) => {
                res.json({ users: allDaUsers })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    }
    
    module.exports.findOneSingleUser = (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(oneSingleUser => {
                res.json({ user: oneSingleUser })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });}
    
    module.exports.createNewUser = (req, res) => {
        User.create(req.body)
            .then(newlyCreatedUser => {
                res.json({ user: newlyCreatedUser })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });}
    
    module.exports.updateExistingUser = (req, res) => {
        User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedUser => {
                res.json({ user: updatedUser })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });}
    
    module.exports.deleteAnExistingUser = (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    }
    ```
    Key Points: 
    - User is a constructor function which can create new user objects and also has other methods that will talk to the database.
    - the `.then()` will only execute upon successfully inserting data in the database
    - the `.catch()` will execute only if there is an error.
    
    5. ### **Routing**
    Navigate into the **`routes`** folder and create the `user.routes.js` file that will be responsible for all of our routes dealing with the user model. Notice at the top of the file, this time, we have a `require("../controllers/user.controller")` statement which is importing everything we exported from the controller file.
    ```js
    const UserController = require('../controllers/user.controller');
    
    module.exports = app => {
        app.get('/api/users', UserController.findAllUsers);
        app.get('/api/users/:id', UserController.findOneSingleUser);
        app.patch('/api/users/:id', UserController.updateExistingUser);
        app.post('/api/users', UserController.createNewUser);
        app.delete('/api/users/:id', UserController.deleteAnExistingUser);
    }
    ```
    **NOTE: The order of these routes matter! If you have a route that uses a wildcard (like `:id`) before a path with a specific name, the wildcard route will always run. Move specific routes to the top to ensure they are followed.**
    
    For example, if you wanted to create a get route with a specific path, it would have to go before your get route for a single document. The following would never make it to the allusers route because the :id route would also match the string allusers:
    ```js
    const UserController = require('../controllers/user.controller');
    
    module.exports = app => {
        app.get('/api/users/:id', UserController.findOneSingleUser);
        app.get('/api/users/allusers', UserController.findAllUsers);
    }
    ```
    
    6. ### **Server**
    Because we modularized our files from the start, the `server.js` file needs to contain only a few lines of code, allows us to be able to easily expand our app, and helps us keep organized. Take a moment and look over the `server.js` file and familiarize yourself with what's happening.
    ```js
    const express = require("express");
    const app = express();
    
    require("./config/mongoose.config");
        
    app.use(express.json(), express.urlencoded({ extended: true }));
    
    const AllMyUserRoutes = require("./routes/user.routes");
    AllMyUserRoutes(app);
    
    app.listen(8000, () => console.log("The server is all fired up on port 8000"));
    ```
    There is a lot that is happening in the code above so take a couple minutes to review and make sure that you understand everything that is going on. When you feel comfortable to move on, you can go ahead and run your server using Nodemon in your terminal:
    ```
    nodemon server.js
    ```
    **NOTE: If you receive the following warning when running your server, you can safely ignore it:**
    ```
    DeprecationWarning: Listening to events on the Db class has been deprecated and will be removed in the next major version
    ```
    
    ### **Debug**
    If it didn't work make sure the following things are done:
    1. Make sure your MongoDB server is running (the '_`mongod`_' command)
    2. Make sure your post data matches the data that you are inserting into the database (name and age)
    3. Make sure that your form submits a post request to '`/users`'
    4. Make sure mongoose is actually installed
    5. Check the order of everything related to mongoose (require --> connect --> Schema --> Model --> route)
    6. Use lots of console.log statements and follow the flow of data.