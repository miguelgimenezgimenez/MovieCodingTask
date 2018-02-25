import { combineReducers } from 'redux'

import discover from './discover'
import search from './search'
import movie from './movie'
import genres from '../genres'

const genresReducers = genres.reduce((reducer, next) => {
  reducer[next.name]= discover(next.name)
  return reducer
},{})


const reducers = combineReducers({
  ...genresReducers,
  search,
  movie
})

export default reducers
