var JSperantito = require('../')
var assert = require('assert')

describe('Projects', () => {
  it('should return error when config is not present', (done) => {
    assert.throws(() => new JSperantito() )
    done()
  })
})
