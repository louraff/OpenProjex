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
  // Note the cool "dot" syntax to query on the property of a subdoc
  const projects = await Project.findOne({ 'project._id': req.params.id, 'project.user': req.user._id });
  // Rogue user!
  if (!projects) return res.redirect('/index');
  // Remove the review using the remove method available on Mongoose arrays
  projects.remove(req.params.id);
  // Save the updated movie doc
  await projects.save();
  res.redirect('projects/index');
}