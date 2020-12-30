const { expect } = require('chai')
const sperant = require('../../')

describe('SDK - Constructor', () => {
  it('expect error when config is not present', (done) => {
    expect(() => sperant.configure()).to.throw('Parameters for this call are undefined')
    done()
  })

  it('should return token when config success', (done) => {
    const config = require('../../lib/config')
    expect(config.default.token).to.equal('')
    
    sperant.configure({ token: 'test_token' })
    expect(config.default.token).to.equal('test_token')
    done()
  })
})
