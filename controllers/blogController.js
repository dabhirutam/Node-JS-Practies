const blogModel = require("../models/blogModel");

const ViewAddBlog = (req, res) => res.render('admin/addBlog');

const AddBlog = async (req, res) => {
    const blog = {...req.body, author: req.user._id, img: req.file.path };

    try {
        await blogModel.create(blog);
        console.log("Blog Added Successfully");
    }  catch (error) { console.log("Server Error", error) }

    console.log("BLOG", blog);
    
    res.redirect('/admin/addBlog');
};

const ViewBlog = (req, res) => res.render('admin/viewBlog');

module.exports = {
    ViewAddBlog,
    AddBlog,
    ViewBlog
};