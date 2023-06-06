const Project = require('../models/project');
const Comment = require('../models/comment')
const User = require('../models/user');
const moment = require('moment');



module.exports = {
   create: createComment,
    new: newComment,
    delete: deleteComment
}

async function createComment(req, res) {
    console.log(req.params); // Check the parameters in the request
    console.log(req.body); 
    console.log(req.user);

    const projectId = req.params.id;
    const { text } = req.body;
  
    // Validate request body and check if project id is valid and text field is provided
  
    const project = await Project.findById(projectId);
    console.log(project)
  
    // Check if project exists
    if (!project) {
        console.log(`Project with id ${projectId} not found.`);
        return res.status(404).json({message: 'Project not found'});
    }

    const user = await User.findById(req.user._id);  
  
    const comment = {
        text,
        author: user, 
    };
  
    project.comments.push(comment);
    await project.save();
  
    res.redirect('/projects');
}



async function newComment(req, res) {
  let comments = await Comment.find({});

  comments = comments.map(comment => {
      comment = comment.toObject(); 
      comment.timeSince = moment(comment.created_at).fromNow();
      return comment;
  });

  res.render('projects/index', { comments });
}

  async function deleteComment(req, res) {
    try {
      const projectId = req.params.projectId;
      const commentId = req.params.commentId;
      const project = await Project.findById(projectId);
  
      // Check if the project exists
      if (!project) {
        return res.status(404).send("Project not found.");
      }
  
      // Find the comment in the project
      const comment = project.comments.id(commentId);
  
      // Check if the comment exists
      if (!comment) {
        return res.status(404).send("Comment not found.");
      }
  
      // Check if the current user is the author of the comment
      if (comment.author.toString() !== req.user._id.toString()) {
        return res.status(403).send("Unauthorized action.");
      }
  
      // If the checks pass, delete the comment
      comment.remove();
      await project.save();
  
      res.redirect(`/projects/${projectId}`);
    } catch (err) {
      console.log(err);
      res.status(500).send("An error occurred while trying to delete the comment.");
    }
  }
  


