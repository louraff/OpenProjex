const Project = require('../models/project');

module.exports = {
    index
}

async function index(req, res, next) {
    const projects = await Project.find({});
    res.render('projects/index', {title: 'Open Projex', projects});
}