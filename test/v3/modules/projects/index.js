const sperant = require('../init.js')
const tData = require('./data.json')
const {
  validateList,
  validateObject
} = require('../../validations')

describe('Projects - Requests', () => {
  it('should get project - getProject', async () => {
    const data = await sperant.project.getProject(tData.project.id)

    validateObject(data)
  })

  it('should return projects list - getProjects', async () => {
    const data = await sperant.project.getProjects()
    const dataPerPage = await sperant.project.getProjects({page: 2})

    validateList(data)
    validateList(dataPerPage)
  })

  /* Only API V3
  it('should get types by project - getTypesByProject', async () => {
   const { data, code } = await sperant.project.getTypesByProject(tData.project.id)

    expect(code).to.equal(200)
    expect(data.project).to.be.a('object')
  })
  */
})
