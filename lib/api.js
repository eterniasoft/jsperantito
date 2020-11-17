var configure = exports.configure = function configure(config) {
  this._enforce(config, ['token'])
  this.token = config.token
}
