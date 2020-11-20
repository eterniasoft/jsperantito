const generateRest = require('@lib/helpers/generateRest.js')

function budget (id = null) {
  const path = `/budgets/${id || ''}`

  const options = {
    path: path,
    id: id
  }

  const restGenerate = ['get', 'list']
  const rest = generateRest(options, restGenerate)

  return rest
}

module.exports = budget
