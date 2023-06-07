const Project = require('../models/project');
const Comment = require('../models/comment')
const User = require('../models/user');



module.exports = {
   create: createComment,
    new: newComment,
    delete: deleteComment
}

async function createComment(req, res) {
    console.log(req.params);
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
    const comments = await Comment.find({})
    res.render('projects/index', { comments });
  }

  async function deleteComment(req, res) {
    try {
      const projectId = req.params.projectId;
      const commentId = req.params.commentId;

      console.log('Project Id:', projectId); 
    console.log('Comment Id:', commentId);

      const project = await Project.findById(projectId);
  
      // Check if the project exists
      if (!project) {
        console.log('Project not found'); 
        return res.status(404).send("Project not found.");
      }
  
      // Find the comment in the project
      const comment = project.comments.id(commentId);
  
      // Check if the comment exists
      if (!comment) {
        console.log('Comment not found'); 
        return res.status(404).send("Comment not found.");
      }
  
      // Check if the current user is the author of the comment
      if (comment.author.toString() !== req.user._id.toString()) {
        console.log('Unauthorized action');
        return res.status(403).send("Unauthorized action.");
      }
  
      // If the checks pass, delete the comment
      // comment.remove();
      project.comments.pull(commentId);
            await project.save();
      console.log('Comment removed successfully'); 
      res.redirect('/projects');
    } catch (err) {
      console.log(err);
      console.log('An error occurred:', err);
      res.status(500).send("An error occurred while trying to delete the comment.");
    }
  }
  


