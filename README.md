# JSperantito
Un cliente para [Sperant API](https://sperant.gitbooks.io/api-sperant/)

## Installation

Run
```bash
$ npm install jsperantito
```

## Usage

### Projects
Revisar el [Manual](https://sperant.gitbook.io/api-sperant/metodos/proyectos)
```javascript
const sperant = require('jsperantito')
sperant.configure({
  token: 'SPERANT_TOKEN', // required
  host: 'api.sperant.com', // optional, default: depend of NODE_ENV, if is 'Production' then api.sperant.com else api.eterniasoft.com
  api_version: 'v2' // optional, default: 'v2', comment: 'For version 3, the library remains to be developed.'
})

async function getData () {
  try {
    // Get projects
    const { data } = await sperant.getProjects()
    console.log("getProjects: ", data)

    // Get projects with search (q)
    const payload = {
      params: {
        q: 'Alta Mar'
      }
    }
    const { data } = await sperant.getProjects(payload)
    console.log("getProjects with payload: ", data)

    // Get specific project
    const project_id = 19
    const { data } = await sperant.getProject(project_id)
    console.log("getProject", data)

  } catch (e) {
    console.error(e)
  }
}
```
