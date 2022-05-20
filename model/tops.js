var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});
var tops = new mongoose.model('Tops', schema);
module.exports = tops;