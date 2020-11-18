/**
 * Is production?.
*/
function _isProduction () {
  process.env.NODE_ENV == 'production'
}

module.exports = _isProduction
