import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import ConnectedPageDefinitions, { PageDefinitions } from '../Navigation/Pages/PageDefinitions'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
describe('PageDefinitions', () => {
  it('renders without crashing', () => {
    const store = mockStore({
      session: { token: '' },
      ui: {
        definitions: {
          filter: {},
          filterList: {},
          componentList: {}
        },
        curate: {
          bodies: {}
        }
      },
      definition: {
        bodies: {}
      }
    })

    const props = {
      match: { path: '/definitions', url: '/definitions', isExact: true, params: {} },
      location: { pathname: '/definitions', search: '', hash: '', key: 'ip23w9' }
    }

    shallow(<ConnectedPageDefinitions store={store} {...props} />)
  })
})
