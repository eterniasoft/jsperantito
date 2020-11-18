var JSperantito = require('../../')
var { expect } = require('chai')

const sperant = new JSperantito()

describe('SDK - Constructor', () => {
  it('expect error when config is not present', (done) => {
    expect(() => sperant.configure()).to.throw('Parameters for this call are undefined')
    done()
  })
})
