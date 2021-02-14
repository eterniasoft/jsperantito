const _enforce = require('./_enforce.js')
const _error = require('./_error.js')
const _validateFields = require('./_validateFields.js')
const _onlyApiV3 = require('./_onlyApiV3.js')

module.exports = (self) => {
  self._enforce = _enforce
  self._error = _error
  self._validateFields = _validateFields
  self._onlyApiV3 = _onlyApiV3
}
