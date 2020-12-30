const api = require('./api.js')
const utils = require('./utils/')
const makeRequest = require('./helpers/makeRequest.js')

function JSperantito () {
  // Initializer & Information
  this.VERSION = api.VERSION
  this.configure = api.configure

  // Utils
  this._isProduction = utils._isProduction
  this._error = utils._error
  this._enforce = utils._enforce
  this._validateFields = utils._validateFields
  this._onlyApiV3 = utils._onlyApiV3

  // Helpers
  this.makeRequest = makeRequest

  // Modules
  this.project = require('./modules/project.js').call(this)
  this.client = require('./modules/client.js').call(this)
}

module.exports = JSperantito
