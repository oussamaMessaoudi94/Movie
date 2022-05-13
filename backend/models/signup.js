const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const signupShema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : {type: String, unique:true},
    password : String,
});

signupShema.plugin(uniqueValidator);

const signup = mongoose.model('signup', signupShema);

module.exports = signup