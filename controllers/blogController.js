const blogImgs = require("../middleware/blogImgs");
const authModel = require("../models/authModel");
const blogModel = require("../models/blogModel");
const fs = require('fs');

const ViewAddBlog = (req, res) => res.render('admin/addBlog');

const AddBlog = async (req, res) => {
    const blog = { ...req.body, author: req.user._id, img: req.file.path };

    try {
        await blogModel.create(blog);

        console.log("Blog Added Successfully");

        res.redirect('viewMyBlog');
    } catch (error) { console.log("Server Error", error) }
};

const ViewBlog = async (req, res) => {
    const blogs = await blogModel.find().populate('author');
    console.log("DONE");

    res.render('admin/viewBlog', { blogs });
}

const ViewMyBlog = async (req, res) => {
    const blogs = await blogModel.find({ author: req.user._id }).populate('author');
    res.render('admin/viewMyBlog', { blogs });
}

const ViewUpdateBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        res.render('admin/updateBlog', { blog });
    } catch (err) {
        console.error("Error fetching blog:", err);
        res.status(500).send("Server Error");
    }
};


const UpdateBlog = async (req, res) => {
    try {
        const { img } = await blogModel.findById(req.params.id );
        const blog = { ...req.body, img: req.file ? req.file.path : img }
        await blogModel.findByIdAndUpdate(req.params.id, blog);

        console.log("Blog updated successfully.");
        req.file && fs.unlinkSync(img);

        res.redirect('/admin/viewMyBlog');
    } catch (error) { console.log("Server Error", error) }
}

module.exports = {
    ViewAddBlog,
    AddBlog,
    ViewBlog,
    ViewMyBlog,
    ViewUpdateBlog,
    UpdateBlog
};