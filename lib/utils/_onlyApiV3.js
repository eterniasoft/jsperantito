const DEFAULT_ERROR_CODE = -1
const config = require('@lib/config')
/**
 * An error when not use API V3
 *
 * @param {string} message
 * @param {number} code
 * @constructor
*/

function _onlyApiV3 () {
  if (config.default.api_version != 'v3') {
    throw new this._error('this method only found in API V3', DEFAULT_ERROR_CODE)
  }
}

module.exports = _onlyApiV3
