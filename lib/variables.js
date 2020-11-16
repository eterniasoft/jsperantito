const TOKEN = process.env.TEST_TOKEN || 'token'
const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  PRODUCTION: PRODUCTION,
  TOKEN: TOKEN,
  DEFAULT_ERROR_CODE: -1,
  DEFAULT_TIMEOUT_REQUEST: 5000,
  PARAMETERS_UNDEFINED: 'Parameters for this call are undefined',
  PARAMETERS_REQUIRED: 'Missing required parameter',
  TOKEN_UNAUTHORIZED: 'Token unauthorized'
}
