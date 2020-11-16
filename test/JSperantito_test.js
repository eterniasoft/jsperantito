var JSperantito = require('../')
var { assert, expect } = require('chai')
const {
  DEFAULT_ERROR_CODE,
  PARAMETERS_UNDEFINED,
  PARAMETERS_REQUIRED
} = require('../lib/Variables.js')

describe('Constructor', () => {
  it('expect error when config is not present', (done) => {
    expect(() => new JSperantito()).to.throw(PARAMETERS_UNDEFINED).with.property('code', DEFAULT_ERROR_CODE)
    done()
  })

  it('not expect error when config are provided', (done) => {
    expect(() => new JSperantito({token: 'token'})).to.not.throw()
    done()
  })
})
