const _makeRequest = require('./lib/makeRequest.js')

const {
  _enforce,
  _validateFields
} = require('./lib/utils.js')

const {
  getProjects,
  getProject
} = require('./lib/projects.js')


// Sperantito
function JSperantito (config) {
  this._enforce(config, ['token'])
  this.token = config.token
}

JSperantito.prototype = {
  _enforce: _enforce,
  _validateFields: _validateFields,
  _makeRequest: _makeRequest,
  getProjects: getProjects,
  getProject: getProject
}

module.exports = JSperantito
