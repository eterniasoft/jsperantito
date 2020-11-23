const projectController = require('@controllers/project.js')

function project () {
  const methods = {
    getProject: (id) => projectController.getProject.call(this, id),
    getProjects: () => projectController.getProjects.call(this),
    getTypesByProject: (project_id) => projectController.getTypesByProject.call(this, project_id)
  }

  return methods
}

module.exports = project
