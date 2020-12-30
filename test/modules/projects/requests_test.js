const { expect } = require('chai')
const sperant = require('../init.js')
const tData = require('./data.json')

describe('Projects - Requests', () => {
  it('should get project - getProject', async () => {
    const data = await sperant.project.getProject(tData.project.id)

    expect(data.project).to.be.a('object')
  })

  it('should return projects list - getProjects', async () => {
    const data = await sperant.project.getProjects()

    expect(data.projects).to.be.a('array')
  })

  /* Only API V3
  it('should get types by project - getTypesByProject', async () => {
   const { data, code } = await sperant.project.getTypesByProject(tData.project.id)

    expect(code).to.equal(200)
    expect(data.project).to.be.a('object')
  })
  */
})
