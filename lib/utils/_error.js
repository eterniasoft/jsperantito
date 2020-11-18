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

module.exports = _error
