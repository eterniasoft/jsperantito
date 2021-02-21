
module.exports = (self) => {
  self.project = require('./project.js')(self)
  self.client = require('./client.js').call(self)
}
