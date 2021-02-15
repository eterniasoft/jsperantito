const sperant = require('../init.js')
const tData = require('./data.json')
const {
  validateList,
  validateObject
} = require('../../validations')

describe('Clients - Requests', () => {
  it('should get client - getClient', async () => {
    const data = await sperant.client.getClient(tData.client.id)

    validateObject(data, 'client')
  })

  it('should return clients list - getClients', async () => {
    const data = await sperant.client.getClients()

    validateList(data, 'clients')
  })

  it('should return data from client created - createClient', async () => {
    const res = await sperant.client.createClient(tData.newClient)

    validateObject(res, 'client')
  })
})
