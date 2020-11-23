require('module-alias/register')
const { expect } = require('chai')
const sperant = require('@test/modules/init.js')
const tData = require('./data.json')

describe('Clients - Requests', () => {

  // Missing createClient

  it('should get client - getClient', async () => {
    const { data, code } = await sperant.client.getClient(tData.client.id)

    expect(code).to.equal(200)
    expect(data.client).to.be.a('object')
  })

  it('should return clients list - getClients', async () => {
    const { data, code } = await sperant.client.getClients()

    expect(code).to.equal(200)
    expect(data.clients).to.be.a('array')
  })
})
