function getProjects () {
  this._makeRequest({
    method: 'GET',
    path: '/projects'
  })
}

function getProject (id) {
  this._validateFields([id])
  this._makeRequest({
    method: 'GET',
    path: `/projects/${id}`
  })
}

module.exports = {
  getProjects: getProjects,
  getProject: getProject
}
