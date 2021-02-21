const { getProject, getProjects, getTypesByProject } = require('../controllers/project.js')

const project = (self) => ({
  getProject: (id) => getProject.call(self, id),
  getProjects: (params) => getProjects.call(self, params),
  getTypesByProject: (project_id) => getTypesByProject.call(self, project_id),
})

module.exports = project
