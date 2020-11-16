var JSperantito = require('../')
var { assert, expect } = require('chai')
var should = require('chai').should()

describe('Constructor', () => {
  it('should return error when config is not present', (done) => {
    (() => new JSperantito()).should.throw()
    done()
  })

  it('should succed when config are provided', (done) => {
    expect(new JSperantito({token: 'token'})).to.be.ok
    done()
  })
})
