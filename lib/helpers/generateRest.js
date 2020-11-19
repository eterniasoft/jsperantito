const makeRequest = require('@lib/helpers/makeRequest.js')

var self;
function generateRest (options, restGenerables, petitions = {}) {
  self = this
  var restPermit
  if (options.id != null) {
    restPermit = ['get', 'update']
    self['path'] = '/' + options.name + '/' + options.id
  } else {
    restPermit = ['list', 'create']
    self['path'] = '/' + options.name
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
      path: self.path
    }
    return makeRequest(options)
  },
  list: () => {
    const options = {
      method: 'GET',
      path: self.path
    }
    return makeRequest(options)
  },
  create: (data) => {
    const options = {
      method: 'POST',
      path: self.path,
      data: data
    }
    return makeRequest(options)
  }
}

module.exports = generateRest
