var JSperantito = require('../')
var { assert, expect } = require('chai')
var should = require('chai').should()

describe('Projects', () => {
  it('should return error when config is not present', (done) => {
    assert.throws(() => new JSperantito() )
    done()
  })
})
