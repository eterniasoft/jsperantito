const https = require('https')
const qs = require('querystring')
const { DEFAULT_TIMEOUT_REQUEST } = process.env

function _makeRequest (options) {
  return new Promise((resolve, reject) => {
    var host = this._isProduction ? 'api.sperant.com' : 'api.eterniasoft.com'

    let query = ''
    if (options.params != undefined) {
      query = qs.stringify(options.params)
    }

    let path = '/v3' + options.path
    if (query.length) {
      path = path + '?' + query
    }

    var requestParams = {
      host: host,
      port: 443,
      method: options.method,
      path: path
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

    req.setTimeout(parseInt(DEFAULT_TIMEOUT_REQUEST), () => {
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