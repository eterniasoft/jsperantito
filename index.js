const utils = require('./lib/Utils.js')

const JSperantito = (config) => {
  this._enforce(config, ['token'])
  this.baseUrl = isProduction ? 'https://api.sperant.com/v2' : 'https://api.eterniasoft.com/v2'
  this.token = config.token
}

JSperantito.prototype = {
  _enforce: utils._enforce 
}

function isProduction () {
  process.env.ENVIRONMENT === 'production'
}


module.exports = JSperantito
