require('module-alias/register')
const { expect } = require('chai')
const sperant = require('@test/modules/init.js')
const tData = require('./data.json')

describe('Budgets - Requests', () => {
  it('should get data of budget', async () => {
    const { data, code } = await sperant.budget(tData.budget.id).get()

    expect(code).to.equal(200)
    expect(data.budget).to.be.a('object')
  })

  it('should return budgets list', async () => {
    const { data, code } = await sperant.budget().list()

    expect(code).to.equal(200)
    expect(data.budgets).to.be.a('array')
  })
})
