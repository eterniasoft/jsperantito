const generateRest = require('@lib/helpers/generateRest.js')

function unit (id = null) {
  const path = `${this.path || ''}/units/${id || ''}`

  const options = {
    id: id,
    path: path
  }

  var restGenerate = this.restGenerate || ['get']

  const rest = generateRest(options, restGenerate)
  return rest
}

module.exports = unit
