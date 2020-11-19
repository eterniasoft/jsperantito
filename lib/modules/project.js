function project (id = null) {
  const options = {
    id: id,
    name: 'projects'
  }
  const restGenerates = ['get', 'create', 'list']
  const rest = this.generateRest(options, restGenerates)
  return rest
}

module.exports = project