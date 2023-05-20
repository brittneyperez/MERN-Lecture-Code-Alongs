const User = require('../models/user.model')

// ! Create a Secret Key
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    // async/await is an alternative version to .then / .catch (it makes multiple promises look cleaner)
    // i.e., User.findOne({}).then().catch
    // ! REGISTER USER
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
    },
    
    // ! LOGIN USER
    loginUser: async (req, res) => {
        try { // * Check if user already exists in DB
            const user = await User.findOne({ email: req.body.email }) // ? Information comes from object => { email : req.body.keyValPair }
            if (user) { // * Check if the password entered matches the password in the DB for that email specifically the hash
                //        Boolean                     password inputed vs password saved in DB
                const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
                
                if (passwordsMatch) { // * Generate userToken (same as line24)
                    const userToken = jwt.sign({ _id: user._id, email: user.email }, secret, {expiresIn:'2h'}) 
                    
                    // * Log the user in (same as line28)
                    res.status(201).cookie('userToken', userToken, { httpOnly:true, maxAge: 2 * 60 * 60 * 1000 }).json({userExists: user})
                    
                } else { // * This is if email does exist by the passwords don't match
                    res.status(400).json({message: "Invalid email/password"})
                }
            
            } else { // * if the user doesn't exist
                res.status(400).json({message: "Invalid email/password"})
            }
        }
        catch(err) { // catches all/any errors
            res.status(400).json({ error: err })
        }
    },
    
    logoutUser: (req, res) => {
        res.clearCookie('userToken').json({ message: "You logged out" }) // userToken tracks if user is logged in or not
    }
}