'use strict'

const {expect} = require('chai')

const search = require('../../server/search')
const auth = require('../../server/auth')
/* eslint-disable no-unused-expressions */

describe('Search', () => {

  describe('when not authenticated', () => {
    let oldAuth
    before(() => {
      oldAuth = auth
      auth.getAuth = function() {
        return new Promise((resolve, reject) => {
          reject(Error('error occured'))
        })
      }
    })

    it('should return an error', async () => {
      const result = await search.run('test')
        .catch((err) => {
          expect(err).to.exist
        })
    })
  })

  // it('should successfully be able to fetch a tree', async () => {
  //   const tree = await list.getTree()
  //   expect(tree.children).to.exist // eslint-disable-line no-unused-expressions
  // })

  // it('should contain top level items', async () => {
  //   const tree = await list.getTree()
  //   expect(tree).to.include.keys(
  //     'breadcrumb', 'children', 'home', 'id', 'nodeType', 'sort'
  //   )
  // })

  // it('should have top level children', async () => {
  //   const {children} = await list.getTree()
  //   expect(children).to.include.keys('top-level-document-1', 'top-level-folder', 'test-folder')
  // })

  // it('should correctly parse tags', () => {
  //   expect(list.getTagged('home')).to.include('xxxxxhz2Km1y-dFv3AVeUD4fkIdh6syCL8NDV2NxxxxxiTe74')
  //   expect(list.getTagged('hidden')).to.include('xxxxxHopd4F8UZ5o0DdiQHf5phvLWvqpWpcWCByxxxxxc8960')
  // })

  // it('should correctly report children', () => {
  //   const {children} = list.getChildren('xxxxxSgXzlz_9VWItb3V0UExxxxxU2X1U')
  //   expect(children.length).to.equal(6)
  //   expect(children).to.include(
  //     'xxxxxy_mPdkoj1yR_3Xz5d6-uOjGot_CvgzVzROxxxxxpRzuU',
  //     'xxxxx0VTyJVjdf0ozpd68iTQ9-QMpG3MMElroRexxxxxQ2zhA',
  //     'xxxxxIPPZm2jTh8T3qav2OiPQ2KfHUfICpo8VOKxxxxxKjzrE',
  //     'xxxxxdBk63JDd1Ra0q2tfVDr_Ubn9H16-7xWax9xxxxxadXes',
  //     'xxxxx5OF9xg6EapqBP5cPxrwAaXxxeMG6r0IpAvxxxxxxrGtY',
  //     'xxxxxXifc2UmJOTZUcE9GYUxxxxx1MTjQ'
  //   )
  // })

  // it('should be able to fetch all routes', () => {
  //   const routes = list.getAllRoutes()
  //   expect(routes).to.exist
  //   expect(routes).to.not.be.empty
  // })
})
