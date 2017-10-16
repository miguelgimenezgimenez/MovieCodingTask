import { combineReducers } from 'redux'

import discover from './discover'
import search from './search'

const reducers = combineReducers({
  discover,
  search
})

export default reducers
