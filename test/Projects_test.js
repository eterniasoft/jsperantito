const JSperantito = require('../')
const { assert, expect } = require('chai')
const { TOKEN } = require('../lib/Variables.js')

describe('Projects', () => {
  var sperant = new JSperantito({token: TOKEN})

  it('expect return error for token not authorized on run method getProjects', (done) => {
    var sperant = new JSperantito({token: 'wrong token'})
    expect(sperant.getProjects()).to.throw(TypeError)
    done()
  })

  it('expect return all projects', (done) => {
    expect(sperant.getProjects()).to.be.a('array')
    done()
  })
})
