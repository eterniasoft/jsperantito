var self
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
    return self.makeRequest(options)
  },
  list: (params) => {
    const options = {
      method: 'GET',
      path: self.path,
      params: params
    }
    return self.makeRequest(options)
  },
  create: (data) => {
    const options = {
      method: 'POST',
      path: self.path,
      data: data
    }
    return self.makeRequest(options)
  }
}

module.exports = generateRest
