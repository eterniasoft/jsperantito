require('module-alias/register')
const { expect } = require('chai')
const sperant = require('@test/modules/init.js')
const tData = require('./data.json')

describe('Projects - Requests', () => {
  it('should get data of unit - units/:id', async () => {
    const { data, code } = await sperant.unit(tData.unit.id).get()

    expect(code).to.equal(200)
    expect(data.unit).to.be.a('object')
  })

  it('should return units from project - project/:id/units', async () => {
    const { data, code } = await sperant.project(tData.project.id).unit().list()

    expect(code).to.equal(200)
    expect(data.units).to.be.a('array')
  })
})
