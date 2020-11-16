var JSperantito = require('../')
var { assert, expect } = require('chai')

describe('Constructor', () => {
  it('expect error when config is not present', (done) => {
    expect(() => new JSperantito()).to.throw('Parameters for this call are undefined')
    done()
  })

  it('not expect error when config are provided', (done) => {
    expect(() => new JSperantito({token: 'token'})).to.not.throw()
    done()
  })
})
