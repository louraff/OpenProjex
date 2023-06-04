const Project = require('../models/project');
const Comment = require('../models/comment')
const User = require('../models/user');


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
    //Sort performers by their name
    const comments = await Comment.find({})
    res.render('projects/index', { comments });
  }

  async function deleteComment(req, res) {
    try {

        console.log('Deleting comment with id:', req.params.id);

        const projectId = req.params.projectId;
        const commentId = req.params.id;
   
        console.log('Project ID' + projectId)
        console.log('Comment ID' + commentId)
  
        // find the project
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({message: 'Project not found'});
        }
  
        // find the comment index
        // const commentIndex = project.comments.findIndex(comment => comment.id === commentId);
        // if (commentIndex === -1) {
        //     return res.status(404).json({message: 'Comment not found'});
        // }

        const commentIndex = project.comments.findIndex(comment => comment._id.toString() === commentId);

        if (commentIndex === -1) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        const deletedComment = project.comments[commentIndex];
        console.log('Deleted comment:', deletedComment);
        
  
        // remove the comment
        project.comments.splice(commentIndex, 1);
        await project.save();

        console.log('Successfully deleted comment with id:', commentId);

  
        res.redirect('/projects');
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'An error occurred while trying to delete the comment'});
    }
  }



