const DEFAULT_ERROR_CODE = -1

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
  requiredKeys.forEach((key) => {
    if (!options[key]) {
      throw new JSperantitoError('Missing required parameter "' + key + '"', DEFAULT_ERROR_CODE)
    }
  })
}

module.exports = {
  JSperantitoError: JSperantitoError,
  _enforce: _enforce
}
