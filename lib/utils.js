const {
  DEFAULT_ERROR_CODE,
} = require('./variables.js')

/**
 * An error with a code.
 *
 * @param {string} message
 * @param {number} code
 * @constructor
*/
function JSperantitoError (message, code) {
  this.message = message
  this.code = code
}

/**
 * Enforces that given options object (first param) defines
 * all keys requested (second param). Raises an error if any
 * is missing.
 *
 * @param {Object} options
 * @param {keys} requiredKeys
 */
function _enforce (options, requiredKeys) {
  if (!options) {
    throw new JSperantitoError('Parameters for this call are undefined', DEFAULT_ERROR_CODE)
  }

  let missingRequiredKeys = []

  requiredKeys.forEach((key) => {
    if (!options[key]) {
      missingRequiredKeys = missingRequiredKeys.concat(key)
    }
  })

  if (missingRequiredKeys.length) {
    throw new JSperantitoError( 'Missing required parameter "' + missingRequiredKeys.join(', ') + '"', DEFAULT_ERROR_CODE)
  }
}

module.exports = {
  JSperantitoError: JSperantitoError,
  _enforce: _enforce
}
