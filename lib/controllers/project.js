const path = '/projects/'
exports.getProject = function (project_id) {
  this._validateFields([project_id])

  const options = {
    method: 'GET',
    path: path + project_id
  }

  return this.makeRequest(options)
}

exports.getProjects = function (params = {}) {

  const options = {
    method: 'GET',
    path: path,
    params: params
  }

  return this.makeRequest(options)
}

exports.getTypesByProject = function (project_id) {
  this._onlyApiV3()
  this._validateFields([project_id])

  const options = {
    method: 'GET',
    path: path + project_id + '/types'
  }

  return this.makeRequest(options)
}
