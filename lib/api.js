const VERSION = require('@root/package').version
const config = require('@lib/config')

function configure (options) {
  this._enforce(options, ['token'])
  config.default = Object.assign(config.default, options)
}

module.exports = {
  VERSION: VERSION,
  configure: configure
}
