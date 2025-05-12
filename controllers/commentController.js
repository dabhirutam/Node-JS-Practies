const commentModel = require("../models/commentModel");

const AddComment = async (req, res) => {
    const comment = { ...req.body, author: req.user._id };
    await commentModel.create(comment);
    console.log("Comment added successfully.");

    res.redirect('/admin/viewBlog');
}

module.exports = {
    AddComment
}