require('module-alias/register')
const JSperantito = require('@root')
const { expect } = require('chai')

const sperant = new JSperantito()

describe('Projects - Requests', () => {
  it('Obtain list of projects', (done) => {
    const VERSION = require('@root/package').version
    expect(sperant.VERSION).to.equal(VERSION)
    done()
  })

  it('Get a project', (done) => {
    const VERSION = require('@root/package').version
    expect(sperant.VERSION).to.equal(VERSION)
    done()
  })
})
