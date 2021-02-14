module.exports = (self) => {
  self.project = require('./project.js').call(self)
  self.client = require('./client.js').call(self)
}
