import { combineReducers } from 'redux'

import genreMovies from './genreMovies'
import search from './search'
import allMovies from './allMovies'
import movie from './movie'
import genres from '../genres'

const genresReducers = genres.reduce((reducer, next) => {
  reducer[next.name]= genreMovies(next.name)
  return reducer
},{})


const reducers = combineReducers({
  ...genresReducers,
  allMovies,
  search,
  movie
})

export default reducers
