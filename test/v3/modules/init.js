const sperant = require('../../../index.js')
sperant.configure({
  token: process.env.TEST_TOKEN,
  api_version: 'v3'
})

module.exports = sperant
