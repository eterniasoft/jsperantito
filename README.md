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
const JSperantito = require('jsperantito')

const sperant = new JSperantito({ token: SPERANT_TOKEN })

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
