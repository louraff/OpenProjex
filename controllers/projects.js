const Project = require('../models/project');
const User = require('../models/user');

module.exports = {
    index,
    create, 
    delete: deleteProject
}

async function index(req, res, next) {
  console.log('Fetching all projects');
  const projects = await Project.find({}).populate('createdBy').sort({createdAt: 'desc'});
  res.render('projects/index', {title: 'Open Projex', projects});
}

async function create(req, res) {
  try {
    const user = await User.findById(req.user._id);  
console.log(user)
console.log(req.params._id)

    const project = new Project({
      name: req.body.name,
      gitUsername: req.body.gitUsername,
      projectURL: req.body.projectURL,
      description: req.body.description,
      createdBy: user._id, 
      avatar: req.body.avatar
    });
console.log(req.body)
    console.log(project)

    const savedProject = await project.save();
    
    res.json({
      message: 'Project created successfully',
      project: savedProject,
      user: user
    });

  } catch (err) {
    console.log(err)
    res.status(422).json(err);
  }
};

async function deleteProject(req, res) {
  try {
      // remove the project with the given id
      const id = req.params.id;

      await Project.findByIdAndRemove(id);
      res.redirect('/projects');
      // res.status(200).json({message: 'Project deleted successfully'});

  } catch (err) {
      console.log(err);
      res.redirect('/projects');
      res.status(500).json({error: 'An error occurred while trying to delete the project'});

  }
}

// async function deleteProject(req, res) {
//   try {
//       // remove the project with the given id
//       const id = req.params.id;

//       await Project.findByIdAndRemove(id);

//       // send a response with status 200 and a json message
//       res.status(200).json({message: 'Project deleted successfully'});
//   } catch (err) {
//       console.log(err);

//       // send a response with status 500 and a json error message
//       res.status(500).json({error: 'An error occurred while trying to delete the project'});
//   }
// }