const path = '/projects/'
function getProject (id) {
  this._validateFields([id])

  const options = {
    method: 'GET',
    path: path + id
  }

  return this.makeRequest(options)
}

module.exports = {
  getProject: getProject
}
