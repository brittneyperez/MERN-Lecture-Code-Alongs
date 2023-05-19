const User = require('../models/user.model')

// ! Create a Secret Key
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    // async/await is an alternative version to .then / .catch (it makes multiple promises look cleaner)
    // i.e., User.findOne({}).then().catch
    registerUser: async (req, res) => {
        try {
            // * Check if the email that was entered in the registration form is already in DB
            const potentialUser = await User.findOne({email: req.body.email}) //? potentialUser is the query's response
            //                      key : val(from body of user obj's key:val pair)
            if (potentialUser) {// if this potentialUser exists
                res.status(400).json({message: "That email already exists. Please login with another email."})
            } else { // * Create user
                const newUser = await User.create(req.body); // everytime we are creating a DB query, we will use await
                
                // * Generate User Token and storing the id and email of the newly created user
                // we can choose what we want to encode (i.e., somewhat sensitive info) and prevent malicious activity
                const userToken = jwt.sign({ _id: newUser._id, email: newUser.email }, secret, {expiresIn:'2h'}) 
                console.log(userToken) // it will look REALLY LONG in the terminal, go to jwt.io to decrypt SOME of the data
                
                // Sending user data back to the client
                res.status(201).cookie('userToken', userToken, { httpOnly:true, maxAge: 2 * 60 * 60 * 1000 }).json({ newUser })
                // ? In Postman, we should see in the Cookie tab the data we requested to see
            }
        }
        catch(err) {
            res.status(400).json({ error: err })
        }
    }
}