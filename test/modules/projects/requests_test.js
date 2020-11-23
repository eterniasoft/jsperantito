require('module-alias/register')
const { expect } = require('chai')
const sperant = require('@test/modules/init.js')
const tData = require('./data.json')

describe('Projects - Requests', () => {
  it('should get project - getProject', async () => {
    const { data, code } = await sperant.project.getProject(tData.project.id)

    expect(code).to.equal(200)
    expect(data.project).to.be.a('object')
  })

  /* Only API V3
  it('should get types by project - getTypesByProject', async () => {
   const { data, code } = await sperant.project.getTypesByProject(tData.project.id)

    expect(code).to.equal(200)
    expect(data.project).to.be.a('object')
  })
  */
})
