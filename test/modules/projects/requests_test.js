require('module-alias/register')
const { expect } = require('chai')
const sperant = require('@test/modules/init.js')
const tData = require('./data.json')

describe('Projects - Requests', () => {
  it('should get data of project', async () => {
    const { data, code } = await sperant.project(tData.project.id).get()

    expect(code).to.equal(200)
    expect(data.project).to.be.a('object')
  })

  it('should return projects list', async () => {
    const { data, code } = await sperant.project().list()

    expect(code).to.equal(200)
    expect(data.projects).to.be.a('array')
  })

  it('should return projects filtering with q', async () => {
    const { data, code } = await sperant.project().list({q: tData.projects.q})

    expect(code).to.equal(200)
    expect(data.projects).to.be.a('array')
  })
})
