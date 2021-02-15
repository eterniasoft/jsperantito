const config = require('../config')

function _parseDataPost (data) {
  let payload = { data: data }

  if (config.default.api_version == 'v3') {
    payload = data
  }

  return payload
}

module.exports = _parseDataPost
