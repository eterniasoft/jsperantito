const sperant = require('../..')
const { expect } = require('chai')

describe('SDK - Info', () => {
  it('expect error when config is not present', (done) => {
    const VERSION = require('../../package').version
    expect(sperant.VERSION).to.equal(VERSION)
    done()
  })
})
