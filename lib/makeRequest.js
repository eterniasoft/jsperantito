const https = require('https')
const { JSperantitoError } = require('./utils.js')
const {
  PRODUCTION,
  DEFAULT_TIMEOUT_REQUEST
} = require('./variables.js')

function _makeRequest (options) {
  return new Promise((resolve, reject) => {
    var host = PRODUCTION ? 'api.sperant.com' : 'api.eterniasoft.com'

    var requestParams = {
      host: host,
      port: 443,
      method: options.method,
      path: '/v2' + options.path
    }

    var req = https.request(requestParams, (res) => {
      var body = []

      res.setEncoding('utf-8')

      res.on('data', (data) => {
        body.push(data)
      })

      res.on('end', () => {
        var payload
        var responseText = body.join('')

        try {
          payload = JSON.parse(responseText)
        } catch (err) {
          reject(err)
          return
        }

        var statusCode = res.statusCode
        var statusType = Math.floor(res.statusCode / 100)

        if (statusType == 4 || statusType == 5) {
          var err = payload.error
          reject(err)
        } else if (statusType == 2) {
          resolve({ data: payload, code: statusCode })
        } else {
          reject('Unexpected response')
        }
      })
    }).on('error', (err) => {
      reject(err)
    })

    req.setHeader('Content-Type', options.contentType || 'application/json')
    req.setHeader('Authorization', 'Bearer ' + this.token)
    req.setHeader('Accept', 'application/json')
    req.setHeader('Accept-Charset', 'utf-8')

    req.setTimeout(DEFAULT_TIMEOUT_REQUEST, () => {
      req.abort()
    })

    if (options.data) {
      var data = options.data
      if (typeof data == 'object') {
        data = JSON.stringify(data)
      }
      req.write(data)
    }
    req.end()
  })
}

module.exports = _makeRequest
