const setApi = require('./api.js')
const setUtils = require('./utils')
const setModules = require('./modules')
const setHelpers = require('./helpers')

function JSperantito () {
  // Initializer & Information
  setApi(this)
  // Utils
  setUtils(this)

  // Helpers
  setHelpers(this)

  // Modules
  setModules(this)
}

module.exports = JSperantito
