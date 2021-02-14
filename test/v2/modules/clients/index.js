const { expect } = require('chai')
const sperant = require('../init.js')
const tData = require('./data.json')

describe('Clients - Requests', () => {
  it('should get client - getClient', async () => {
    const data = await sperant.client.getClient(tData.client.id)

    expect(data.client).to.be.a('object')
  })

  it('should return clients list - getClients', async () => {
    const data = await sperant.client.getClients()

    expect(data.clients).to.be.a('array')
  })
})
