const Project = require('../models/project');
const User = require('../models/user');

module.exports = {
    index,
    create
}

async function index(req, res, next) {
  const projects = await Project.find({}).populate('createdBy');
  res.render('projects/index', {title: 'Open Projex', projects});
}



async function create(req, res) {
  try {
    // Here you can get the form data from `req.body`
    // You'll need to use the data to create a new project in your database
    // Note that I'm making a guess on how your form data is structured, you might need to adjust this

    const user = await User.findById(req.user._id);  // assuming req.user._id contains current user id
console.log(user)
console.log(req.params._id)

    const project = new Project({
      name: req.body.name,
      gitUsername: req.body.gitUsername,
      projectURL: req.body.projectURL,
      description: req.body.description,
      createdBy: user._id, // This should be ObjectId not user's name
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