import { combineReducers } from 'redux'

import discover from './discover'
import search from './search'
import movie from './movie'

const reducers = combineReducers({
  discover,
  search,
  movie
})

export default reducers
