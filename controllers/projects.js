const Project = require('../models/project');
const User = require('../models/user');
const fetch = require('node-fetch');
const token = process.env.GITHUB_TOKEN;  
const ROOT_URL = 'https://api.github.com';


module.exports = {
    index,
    create, 
    delete: deleteProject,
    saveProject,
    likeProject
}

async function index(req, res, next) {
  console.log('Fetching all projects');
  const projects = await Project.find({})
    .populate({
      path: 'comments.author',
      model: 'User'
    })
    .populate('createdBy')
    .sort({createdAt: 'desc'});
  res.render('projects/index', {title: 'Open Projex', projects, currentUser: req.user});
}

async function create(req, res) {
  try {
    const user = await User.findById(req.user._id);  
console.log(user)
console.log(req.params._id)

const gitUsername = req.body.gitUsername;

let gitUser = await User.findOne({ gitUsername });

if (!gitUser) {
  const options = {
    headers: {
      Authorization: `token ${token}`
    }
  };

  const userData = await fetch(`${ROOT_URL}/users/${gitUsername}`, options)
    .then(res => res.json());

  gitUser = new User({
    gitUsername,
    gitData: userData,
  });

  await gitUser.save();
}

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
    
    res.redirect('/projects');


  } catch (err) {
    console.log(err)
    res.status(422).json(err);
  }
};

async function deleteProject(req, res) {
  try {
      const id = req.params.id;
      const project = await Project.findById(id);

      // Check if the project exists
      if (!project) {
        return res.status(404).send("Project not found.");
      }

      // Check if the current user is the creator of the project
      if (project.createdBy.toString() !== req.user._id.toString()) {
        return res.status(403).redirect('/projects');

      }

      // If the checks pass, delete the project
      await Project.findByIdAndRemove(id);
      res.redirect('/projects');
  } catch (err) {
      console.log(err);
      res.redirect('/projects');
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
    console.log("project: ", project); 
    console.log("req.user: ", req.user); 

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
