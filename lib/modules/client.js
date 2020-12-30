const clientController = require('../controllers/client.js')

function client () {
  const methods = {
    createClient: (data) => clientController.createClient.call(this, data),
    getClient: (id) => clientController.getClient.call(this, id),
    getClients: () => clientController.getClients.call(this)
  }

  return methods
}

module.exports = client
