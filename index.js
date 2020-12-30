require('dotenv').config()

const JSperantito = require('./lib/jsperantito.js')

function createInstance () {
  var instance = new JSperantito()
  return instance
}

var sperant = createInstance()

module.exports = sperant
module.exports.default = sperant
