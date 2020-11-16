var JSperantito = require('../')
var assert = require('assert')

describe('JSperantito - initializer', () => {
  it('should return error when config is not present', (done) => {
    assert.throws(() => new JSperantito() )
    done()
  })

  it('should succed when config are provided', (done) => {
    assert.ok(() => new JSperantito({token: 'token'}) )
    done()
  })
})
