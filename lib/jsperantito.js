const api = require('@lib/api.js')
const utils = require('@lib/utils/')
const modules = require('@lib/modules/')
const helpers = require('@lib/helpers/')

function JSperantito () {
  // Initializer & Information
  this.VERSION = api.VERSION
  this.configure = api.configure

  // Utils
  this._isProduction = utils._isProduction
  this._error = utils._error
  this._enforce = utils._enforce
  this._validateFields = utils._validateFields

  // Helpers
  this.generateRest = helpers.generateRest
  this.makeRequest = helpers.makeRequest

  // Modules
  this.project = modules.project
}

module.exports = JSperantito
