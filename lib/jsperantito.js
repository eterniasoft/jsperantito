const api = require('@lib/api.js')
const utils = require('@lib/utils/')

function JSperantito () {
  // Initializer & Information
  this.VERSION = api.VERSION
  this.configure = api.configure

  // Utils
  this._isProduction = utils._isProduction
  this._error = utils._error
  this._enforce = utils._enforce
  this._validateFields = utils._validateFields
  this._makeRequest = utils._makeRequest
}

module.exports = JSperantito
