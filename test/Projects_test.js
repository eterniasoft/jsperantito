const JSperantito = require('../')
const { assert, expect } = require('chai')
const { TOKEN } = require('../lib/variables.js')

describe('Projects', () => {
  describe('Token Bad', () => {
    const sperant = new JSperantito({token: 'wrong token'})
    
    it('expect return error for token not authorized on run getProjects', (done) => {
      sperant.getProjects().then(res => console.log('faaa', res)).catch(e => console.log(e))
      expect(sperant.getProjects()).to.throw()
      done()
    })

    it('expect return error for token not authorized on run getProject', (done) => {
      const f1 = ( () => sperant.getProject(1).then(res => console.log(res)) )
      f1()
      expect(f1()).to.throw()
      done()
    })
  })

  describe('Requests', () => {
    it('expect return all projects', (done) => {
      var sperant = new JSperantito({token: TOKEN})
      expect(sperant.getProjects()).to.be.a('array')
      done()
    })
  })
})
