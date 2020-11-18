var JSperantito = require('../../')
var { assert, expect } = require('chai')

const sperant = new JSperantito()

describe('Constructor', () => {
  it('expect error when config is not present', (done) => {
    expect(() => sperant.configure()).to.throw('Parameters for this call are undefined')
    done()
  })

  it('not expect error when config are provided', (done) => {
    expect(() => sperant.configure({token: 'token'})).to.not.throw()
    done()
  })
})
