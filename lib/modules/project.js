const generateRest = require('@lib/helpers/generateRest.js')

function project (id = null) {
  const options = {
    id: id,
    name: 'projects'
  }
  const restGenerates = ['get', 'create', 'list']
  const rest = generateRest.call(this, options, restGenerates)
  return rest
}

module.exports = project
