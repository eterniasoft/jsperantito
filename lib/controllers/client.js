const path = '/clients/'

exports.createClient = function (client) {

  const options = {
    method: 'POST',
    path: path,
    data: client
  }

  return this.makeRequest(options)
}

exports.getClient = function (client_id) {
  this._validateFields([client_id])

  const options = {
    method: 'GET',
    path: path + client_id
  }

  return this.makeRequest(options)
}

exports.getClients = function () {

  const options = {
    method: 'GET',
    path: path
  }

  return this.makeRequest(options)
}
