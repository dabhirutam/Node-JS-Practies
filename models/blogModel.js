const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        required: true
    },
    img:{
        type: String,
        required: true
    }

}, { timestamps: true });

const blogModel = mongoose.model('blogs', blogSchema);

module.exports = blogModel;