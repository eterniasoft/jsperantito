const { getProject } = require('@controllers/project.js')

function project () {
  const methods = {
    getProject: (id) => getProject.call(this, id)
  }

  return methods
}

module.exports = project
