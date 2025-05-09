const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    // Required Feild
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    role: {type: String, enum: ['admin', 'user'], default: 'user'},

    // Optional Feild
    avatar: {type: String},
    about: {type: String},
    company: {type: String},
    job: {type: String},
    country: {type: String},
    address: {type: String},
    phone: {type: Number},
    twitter: {type: String},
    facebook: {type: String},
    instagram: {type: String},
    linkedin: {type: String},
});

const authModel = mongoose.model('users', authSchema);

module.exports = authModel;