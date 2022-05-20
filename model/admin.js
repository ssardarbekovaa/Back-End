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
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }

});
var admin = new mongoose.model('Admin', schema);
module.exports = admin;