const {
  DEFAULT_ERROR_CODE,
} = process.env

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
    throw new this._error('Parameters for this call are undefined', DEFAULT_ERROR_CODE)
  }

  let missingRequiredKeys = []

  requiredKeys.forEach((key) => {
    if (!options[key]) {
      missingRequiredKeys = missingRequiredKeys.concat(key)
    }
  })

  if (missingRequiredKeys.length) {
    throw new this._error( 'Missing required parameter "' + missingRequiredKeys.join(', ') + '"', DEFAULT_ERROR_CODE)
  }
}

module.exports = _enforce
