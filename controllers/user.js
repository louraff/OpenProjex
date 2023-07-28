
 

const User = require('../models/user');
const Project = require('../models/project');

module.exports = {
    show
}

async function show(req, res) {
    try {
        const user = await User.findById(req.params.id);
        const projects = await Project.find({ createdBy: user._id }).populate('createdBy');
        console.log(user);
        projects.forEach(project => {
          console.log('Project:', project);
          console.log('CreatedBy:', project.createdBy);
      });

    
        res.render('user/show', {title: 'User Profile', user, projects });
      } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
    }
    
