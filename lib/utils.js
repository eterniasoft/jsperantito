const {
  DEFAULT_ERROR_CODE,
} = process.env

/**
 * An error with a code.
 *
 * @param {string} message
 * @param {number} code
 * @constructor
*/
function _error (message, code) {
  this.message = message
  this.code = code
}

/**
 * An error with a code.
 *
 * @param {string} message
 * @param {number} code
 * @constructor
*/
function _validateFields (fields) {
  fields.forEach(field => {
    if (field == undefined || field == null) {
      throw new this._error(`${field} not permit undefined or null.`, DEFAULT_ERROR_CODE)
    }
  })
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

/**
 * Is production?.
 *
 * @param {string} message
 * @param {number} code
 * @constructor
*/
function _isProduction () {
  process.env.NODE_ENV == 'production'
}

module.exports = {
  _error: _error,
  _enforce: _enforce,
  _validateFields: _validateFields,
  _isProduction: _isProduction
}
