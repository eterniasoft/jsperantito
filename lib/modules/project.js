const generateRest = require('@lib/helpers/generateRest.js')

function project (id = null) {
  const path = `/projects/${id || ''}`

  const options = {
    path: path,
    id: id
  }

  const restGenerate = ['get', 'list']
  const rest = generateRest(options, restGenerate)

  const submodules = {
    unit: () => {
      const options = {
        restGenerate: ['list'],
        path: path
      }
      return this.unit.call(options)
    }
  }

  return Object.assign(rest, submodules)
}

module.exports = project
