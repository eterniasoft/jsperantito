const https = require('https')
const qs = require('querystring')
const config = require('@lib/config')
const DEFAULT_TIMEOUT_REQUEST = 17000

function makeRequest (options) {
  return new Promise((resolve, reject) => {
    let query = ''
    if (options.params != undefined) {
      query = qs.stringify(options.params)
    }

    let path = '/' + config.default.api_version + options.path
    if (query.length) {
      path = path + '?' + query
    }

    var authorization = `Bearer ${config.default.token}`
    if (config.default.api_version == 'v3') {
      authorization = config.default.token
    }

    var requestParams = {
      hostname: config.default.host,
      method: options.method,
      path: path,
      headers: {
        Authorization: authorization,
        'Content-Type': 'application/json'
      }
    }

    var req = https.request(requestParams, (res) => {
      var body = []

      res.setEncoding('utf-8')

      res.on('data', (data) => {
        body.push(data)
      })

      res.on('end', () => {
        var response = body.join('')

        var payload = JSON.parse(response)
        var statusCode = res.statusCode

        if (statusCode === 200) {
          resolve(payload)
        } else {
          throw payload.errors
        }
      })
    })

    req.on('error', (err) => {
      reject(err)
    })

    req.setTimeout(parseInt(DEFAULT_TIMEOUT_REQUEST), () => {
      req.abort()
    })

    var data = options.data
    data = JSON.stringify(data)
    req.end(data)
  })
}

module.exports = makeRequest
