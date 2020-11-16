const https = require('https')
const { JSperantitoError } = require('./lib/utils.js')
const { PRODUCTION } = require('./variables.js')

function _makeRequest (options, callback) {
  var host = PRODUCTION ? 'https://api.sperant.com/v2' : 'https://api.eterniasoft.com/v2'

  var requestParams = {
    host: host,
    port: 443,
    method: options.method,
    path: options.path
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
        callback(new JSperantitoError('Failed to parse response', DEFAULT_ERROR_CODE), null)
        return
      }

      var statusCode = res.statusCode
      var statusType = Math.floor(res.statusCode / 100)

      if (statusType == 4 || statusType == 5) {
        var err = payload.errors[0]
        callback(new JSperantitoError(err.message, err.code), null)
      } else if (statusType == 2) {
        callback(null, payload.data || payload)
      } else {
        callback(new JSperantitoError('Unexpected response', DEFAULT_ERROR_CODE), null)
      }
    })
  }).on('error', (err) => {
    callback(new JSperantitoError(err.message, DEFAULT_ERROR_CODE), null)
  })

  req.setHeader('Content-Type', options.contentType || 'application/json')
  req.setHeader('Authorization', 'Bearer ' + this._accessToken)
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
}

