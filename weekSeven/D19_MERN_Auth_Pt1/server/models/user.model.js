const mongoose = require('mongoose')
const bcrypt = require('bcrypt') // npm install bcrypt <= to use this package
const { isEmail } = require('validator') // npm install validator <= to use this package
// ? isEmail is a package that contains a REGEX to check email format

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [8, "First name must be 8 characters or longer"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [8, "Last name must be 8 characters or longer"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"], // this ensures that the user won't createa another account using an email that already exists in the DB
        validate: [isEmail, 'Please enter valid email'] // only after installing validator package will this work
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
}, {timestamps: true});

// ! Before the model completes running the code above, it will first go through the Middleware
// * Middleware is to check and make sure the password and confirm password match
// ? 1. Middleware to create virutal field: confirm password
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value)

// ? 2. Middleware to validate the password and confirm password match
UserSchema.pre('validate', function (next) {
    if (this.password != this._confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password')
    } // if not matching, it's invalidated and will not go through
    next();
})

// ! After confirming password validation, we need to hash it
// * Middleware to hash password
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10) // the function will use the password the user inputs, and hash 10 rounds of salt
        .then(hash => { // then, it returns the newly hashed password
            this.password = hash
            next()
        })
})


const User = mongoose.model('User', UserSchema)
module.exports = User