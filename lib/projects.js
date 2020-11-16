function getProjects () {
  return this._makeRequest({
    method: 'GET',
    path: '/projects'
  })
}

function getProject (id) {
  this._validateFields([id])
  return this._makeRequest({
    method: 'GET',
    path: `/projects/${id}`
  })
}

module.exports = {
  getProjects: getProjects,
  getProject: getProject
}
