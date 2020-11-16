const TOKEN = process.env.TEST_TOKEN || 'token'

module.exports = {
  TOKEN: TOKEN,
  DEFAULT_ERROR_CODE: -1,
  PARAMETERS_UNDEFINED: 'Parameters for this call are undefined',
  PARAMETERS_REQUIRED: 'Missing required parameter'
}
