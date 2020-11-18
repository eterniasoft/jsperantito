'use strict';

const dotenv = require('dotenv')
dotenv.config()

const api = require('./api.js')
const utils = require('./utils/')

function JSperantito () {
  // Initializer
  this.configure = api.configure

  // Utils
  this._isProduction = utils._isProduction
  this._error = utils._error
  this._enforce = utils._enforce
  this._validateFields = utils._validateFields
  this._makeRequest = utils._makeRequest
}

module.exports = JSperantito
