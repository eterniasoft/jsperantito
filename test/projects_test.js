const JSperantito = require('../')
const { assert, expect } = require('chai')
const {
  TEST_TOKEN,
  TEST_PROJECT_ID
} = require('../lib/variables.js')

describe('Projects', () => {
  describe('Token Unauthorized', () => {
    const sperant = new JSperantito({token: 'wrong token'})

    it('expect return error for token not authorized on run getProjects', async () => {
      try {
        await sperant.getProjects()
      } catch (e) {
        expect(e).to.equal('No Autorizado')
      }
    })

    it('expect return error for token not authorized on run getProject', async () => {
      try {
        await sperant.getProject(1)
      } catch (e) {
        expect(e).to.equal('No Autorizado')
      }
    })
  })

  describe('Requests', () => {
    var sperant = new JSperantito({token: TEST_TOKEN})
    it('expect return all projects', async () => {
      const { data, code } = await sperant.getProjects()
      expect(code).to.equal(200)
      expect(data).to.be.a('object')
    })
  })
})
