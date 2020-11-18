const VERSION = require('@root/package').version

function configure (config) {
  this._enforce(config, ['token'])
  this.token = config.token
}

module.exports = {
  VERSION: VERSION,
  configure: configure
}
