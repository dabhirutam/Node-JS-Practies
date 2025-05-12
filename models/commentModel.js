const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    comment:{
        type: String,
        required: true
    },
    author:{
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        required: true
    },
    blog:{
        type: mongoose.Schema.ObjectId,
        ref: 'blogs',
        required: true
    }
}, { timestamps: true });

const commentModel = mongoose.model('comments',commentSchema);

module.exports = commentModel;