const dotenv = require('dotenv')
dotenv.config()

const {
  NODE_ENV,
  TEST_TOKEN,
  TEST_PROJECT_ID,
  TEST_PROJECTS_Q
} = process.env

const PRODUCTION = NODE_ENV === 'production'

module.exports = {
  PRODUCTION: PRODUCTION,
  TEST_TOKEN: TEST_TOKEN,
  TEST_PROJECT_ID: TEST_PROJECT_ID,
  TEST_PROJECTS_Q: TEST_PROJECTS_Q
}
