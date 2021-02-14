const { expect } = require('chai')

module.exports = (res) => {
  expect(res).to.be.a('object')
  expect(res.links).to.be.a('object')
  expect(res.meta).to.be.a('object')
  expect(res.data).to.be.a('array')
}
