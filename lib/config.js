const host = process.env.NODE_ENV === 'production' ?  'api.sperant.com' : 'api.eterniasoft.com'

exports.default = {
  host: host,
  token: '',
  api_version: 'v2'
}
