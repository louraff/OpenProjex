const User = require('../models/user');

module.exports = {
    show
}

async function show(req, res) {
    try {
    const user = await User.findById(req.params.id)
    res.render('user/show', {title: 'User Profile', user})
    } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('index', { errorMsg: err.message });
    }
}