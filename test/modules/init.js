const JSperantito = require('../../index.js')
const { TEST_TOKEN } = process.env
const sperant = new JSperantito()
sperant.configure({token: TEST_TOKEN})

module.exports = sperant
