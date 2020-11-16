const dotenv = require('dotenv')
dotenv.config()

const {
  NODE_ENV,
  TEST_TOKEN,
  TEST_PROJECT_ID
} = process.env

const PRODUCTION = NODE_ENV === 'production'

module.exports = {
  NODE_ENV: NODE_ENV,
  PRODUCTION: PRODUCTION,
  DEFAULT_ERROR_CODE: -1,
  DEFAULT_TIMEOUT_REQUEST: 17000,
  TEST_TOKEN: TEST_TOKEN,
  TEST_PROJECT_ID: TEST_PROJECT_ID
}
