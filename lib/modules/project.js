const projectController = require('@controllers/project.js')

function project () {
  const methods = {
    getProject: (id) => projectController.getProject.call(this, id)
  }

  return methods
}

module.exports = project
