
function _generateModuleMethods (element) {
  const methods = {
    getPath: () => {
      return element.path
    }
  }
  return methods
}

module.exports = _generateModuleMethods
