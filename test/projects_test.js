const JSperantito = require('../')
const { assert, expect } = require('chai')
const {
  TEST_TOKEN,
  TEST_PROJECT_ID,
  TEST_PROJECTS_Q
} = require('../lib/variables.test.js')

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
    describe('getProjects - methods and validations for all projects', () => {
      it('expect return all projects', async () => {
        const { data, code } = await sperant.getProjects()

        expect(code).to.equal(200)
        expect(data).to.be.a('object')
      })

      it('expect return projects with parameter "q"', async () => {
        const payload = {
          params: {
            q: TEST_PROJECTS_Q
          }
        }
        const { data, code } = await sperant.getProjects(payload)

        expect(code).to.equal(200)
        expect(data).to.be.a('object')
      })
    })

    describe('getProject - methods and validations for one project', () => {
      it('expect return error for missing ID', (done) => {
        expect(() => sperant.getProject()).to.throw(/not permit undefined or null/)
        done()
      })

      it('expect return project with set id', async () => {
        const { data, code } = await sperant.getProject(TEST_PROJECT_ID)

        expect(code).to.equal(200)
        expect(data).to.be.a('object')
      })
    })
  })
})
