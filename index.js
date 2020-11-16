const utils = require('./lib/utils.js')

function JSperantito (config) {
  this._enforce(config, ['token'])
  this.token = config.token
}

JSperantito.prototype = {
  _enforce: utils._enforce 
}

module.exports = JSperantito
