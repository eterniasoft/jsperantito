const { _enforce } = require('./lib/utils.js')
const _makeRequest = require('./lib/makeRequest.js')

function JSperantito (config) {
  this._enforce(config, ['token'])
  this.token = config.token
}

JSperantito.prototype = {
  _enforce: _enforce,
  _makeRequest: _makeRequest
}

module.exports = JSperantito
