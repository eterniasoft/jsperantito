const path = '/projects/'
function getProject (project_id) {
  this._validateFields([project_id])

  const options = {
    method: 'GET',
    path: path + project_id
  }

  return this.makeRequest(options)
}

function getTypesByProject (project_id) {
  this._onlyApiV3()
  this._validateFields([project_id])

  const options = {
    method: 'GET',
    path: path + project_id + '/types'
  }

  return this.makeRequest(options)
}

module.exports = {
  getProject: getProject,
  getTypesByProject: getTypesByProject
}
