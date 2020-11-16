const TOKEN = process.env.TEST_TOKEN || 'token'
const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  PRODUCTION: PRODUCTION,
  TOKEN: TOKEN,
  DEFAULT_ERROR_CODE: -1,
  DEFAULT_TIMEOUT_REQUEST: 17000,
  TOKEN_UNAUTHORIZED: 'Token unauthorized'
}
