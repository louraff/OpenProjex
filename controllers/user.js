
 

const User = require('../models/user');
const Project = require('../models/project');

module.exports = {
    show
}

async function show(req, res) {
    try {
        const user = await User.findById(req.params.id);
        const projects = await Project.find({ createdBy: user._id }).populate('createdBy');
    
        res.render('user/show', {title: 'User Profile', user, projects });
      } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
    }
    
    
//     try {
//     const user = await User.findById(req.user._id)
//     res.render('user/show', {title: 'User Profile', user})
//     } catch (err) {
//     // Typically some sort of validation error
//     console.log(err);
//     res.render('index', { errorMsg: err.message });
//     }
// }