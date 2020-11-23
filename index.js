const moduleAlias = require('module-alias')
moduleAlias.addAliases({
  '@root': __dirname,
  '@lib': __dirname + '/lib',
  '@test': __dirname + '/test',
  '@controllers': __dirname + '/lib/controllers'
})
moduleAlias()

const dotenv = require('dotenv')
dotenv.config()

module.exports = require('@lib/jsperantito.js')
