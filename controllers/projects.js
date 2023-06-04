const Project = require('../models/project');
const User = require('../models/user');

module.exports = {
    index,
    create, 
    delete: deleteProject,
    saveProject,
    likeProject
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
      // res.status(500).json({error: 'An error occurred while trying to delete the project'});

  }
}

async function saveProject(req, res) {
  try {
    const projectId = req.params.id;
    const userId = req.user._id;

    let foundUser = await User.findById(userId);
    console.log('foundUser:', foundUser);

    if (foundUser.savedProjects.indexOf(projectId) === -1) {
        foundUser.savedProjects.push(projectId);
        await foundUser.save();
        res.redirect('/projects');
    } else {
        // The project is already saved
        res.redirect('/projects');
    }
} catch (err) {
    console.log(err);
}
};

async function likeProject(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    console.log("project: ", project); // Added logging
    console.log("req.user: ", req.user); // Added logging

    if (!project) {
      console.log('Project not found');
      res.send('Project not found');
      return;
    }
    if (!req.user) {
      res.redirect("/auth/google");
    } else if (project.likes.includes(req.user._id)) {
      const idx = project.likes.indexOf(req.user._id);
      project.likes.splice(idx, 1);
    } else {
      project.likes.push(req.user);
    }
    await project.save();
    res.redirect('/projects');
  } catch (err) {
    console.log(err);
    res.send("There was a problem liking the project.");
  }
}
