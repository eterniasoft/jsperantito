const generateRest = require('@lib/helpers/generateRest.js')

function project (id = null) {
  const path = `/projects/${id || ''}`

  const options = {
    path: path,
    id: id
  }
  const restGenerate = ['get', 'create', 'list']
  const rest = generateRest(options, restGenerate)

  const controllers = {
    unit: () => {
      const options = {
        restGenerate: ['list'],
        path: path
      }
      return this.unit.call(options)
    }
  }

  return Object.assign(rest, controllers)
}

module.exports = project
