// Copyright (c) Microsoft Corporation. All rights reserved.
// SPDX-License-Identifier: MIT

import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import uiReducer from './uiReducer'
import curationReducer from './curationReducer'
import packageReducer from './packageReducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  ui: uiReducer,
  package: packageReducer,
  curation: curationReducer
})

export default rootReducer
export { default as listReducer } from './listReducer'
export { default as itemReducer } from './itemReducer'
