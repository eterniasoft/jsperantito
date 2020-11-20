const makeRequest = require('@lib/helpers/makeRequest.js')

var path
function generateRest (options, restGenerables, petitions = {}) {
  path = options.path

  var restPermit
  if (options.id != null) {
    restPermit = ['get', 'update']
  } else {
    restPermit = ['list', 'create']
  }

  restGenerables = restGenerables.filter( e => restPermit.includes(e))

  restGenerables.forEach((rest) => {
    petitions[rest] = restFunctions[rest]
  })

  return petitions
}

const restFunctions = {
  get: () => {
    const options = {
      method: 'GET',
      path: path
    }
    return makeRequest(options)
  },
  list: (params) => {
    const options = {
      method: 'GET',
      path: path,
      params: params
    }
    return makeRequest(options)
  },
  create: (data) => {
    const options = {
      method: 'POST',
      path: path,
      data: data
    }
    return makeRequest(options)
  }
}

module.exports = generateRest
