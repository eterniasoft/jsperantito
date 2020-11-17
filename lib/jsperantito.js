'use strict';

const dotenv = require('dotenv')
dotenv.config()

const api = require('./api.js')
const _makeRequest = require('./makeRequest.js')
const utils = require('./utils.js')

function JSperantito () {
  // Initializer
  this.configure = api.configure

  // Utils
  this._isProduction = utils._isProduction
  this._error = utils._error
  this._enforce = utils._enforce
  this._validateFields = utils._validateFields
  this._makeRequest = _makeRequest
}

module.exports = JSperantito
