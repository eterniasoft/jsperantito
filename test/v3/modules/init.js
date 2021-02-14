const sperant = require('../../../index.js')
sperant.configure({
  token: process.env.TEST_TOKEN_V3,
  api_version: 'v3'
})

module.exports = sperant
