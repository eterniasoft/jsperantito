'use strict';

var api = require('./api.js')
const _makeRequest = require('./makeRequest.js')

const utils = require('./utils.js')

// Sperantito
function JSperantito () {
  // Initializer
  this.configure = api.configure

  // Methods
  this._makeRequest = _makeRequest
  this._enforce = utils._enforce
  this._validateFields = utils._validateFields
}

module.exports = JSperantito
