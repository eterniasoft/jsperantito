const { expect } = require('chai')

module.exports = (res, module) => {
  expect(res).to.be.a('object')
  expect(res[module]).to.be.a('object')
}
