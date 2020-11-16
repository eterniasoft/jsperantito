function getProjects (options) {
  return this._makeRequest({
    method: 'GET',
    path: '/projects',
    params: options.params
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
