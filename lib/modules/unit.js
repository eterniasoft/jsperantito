function unit (id = null) {
  const options = {
    id: id,
    name: 'projects'
  }
  const restGenerates = ['get']
  const rest = this.generateRest(options, restGenerates)
  return rest
}

module.exports = unit
