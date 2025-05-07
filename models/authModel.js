const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    role: {type: String, enum: ['admin', 'user'], default: 'user'},
});

const authModel = mongoose.model('users', authSchema);

module.exports = authModel;