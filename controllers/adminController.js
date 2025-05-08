
const Dashboard = (req, res) => {    
    res.render('admin/dashboard', {admin: req.user});
}

module.exports = { Dashboard }