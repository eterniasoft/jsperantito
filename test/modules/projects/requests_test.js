require('module-alias/register')
const { expect } = require('chai')
const sperant = require('@test/modules/init.js')
const tData = require('./data.json')

describe('Projects - Requests', () => {
  it('should get data of project', async () => {
    const { data, code } = await sperant.project.getProject(tData.project.id)
    console.log(code, data)

    expect(code).to.equal(200)
    expect(data.project).to.be.a('object')
  })
})
