require('module-alias/register')
const JSperantito = require('@root')
const { TEST_TOKEN } = process.env
const sperant = new JSperantito()
sperant.configure({token: TEST_TOKEN})

module.exports = sperant
