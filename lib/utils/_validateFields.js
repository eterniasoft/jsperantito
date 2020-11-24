const DEFAULT_ERROR_CODE = -1
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

module.exports = _validateFields
