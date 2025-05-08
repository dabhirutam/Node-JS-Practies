
const Dashboard = (req, res) => {
    res.render('user/dashboard', { admin: req.user });
}

module.exports = { Dashboard }