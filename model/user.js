var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    age: String,
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }

});
var user = new mongoose.model('User', schema);
module.exports = user;