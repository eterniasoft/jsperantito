require('module-alias/register')
const JSperantito = require('@root')
const { expect } = require('chai')
const { TEST_TOKEN } = process.env

const sperant = new JSperantito()
sperant.configure({token: TEST_TOKEN})

describe('Projects - Requests', () => {
  it('should get data of project', async () => {
    const { data, code } = await sperant.project(19).get()

    expect(code).to.equal(200)
    expect(data.project).to.be.a('object')
  })

  it('should return projects list', async () => {
    const { data, code } = await sperant.project().list()

    expect(code).to.equal(200)
    expect(data.projects).to.be.a('array')
  })
})
