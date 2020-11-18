var JSperantito = require('@root')
var { expect } = require('chai')

const sperant = new JSperantito()

describe('SDK - Info', () => {
  it('expect error when config is not present', (done) => {
    const VERSION = require('@root/package').version
    expect(sperant.VERSION).to.equal(VERSION)
    done()
  })
})
