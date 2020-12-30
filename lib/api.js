const VERSION = require('../package').version
const config = require('./config')

function configure (options) {
  this._enforce(options, ['token'])
  config.default = Object.assign(config.default, options)
}

module.exports = {
  VERSION: VERSION,
  configure: configure
}
