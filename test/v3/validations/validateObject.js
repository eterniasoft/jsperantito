const { expect } = require('chai')

module.exports = (res) => {
  expect(res).to.be.a('object')
  expect(res.data).to.be.a('object')
}
