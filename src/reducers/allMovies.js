const addMovies = (movies, allMovies) => {
  return allMovies.concat(movies.map((item) => item.title)).filter((movie, i, refArray) => refArray.indexOf(movie) == i)
}

export default (state = { allMovies: [] }, action) => {
  switch (true) {     
    case /GET_\w+_SUCCESS/.test(action.type):
      return { ...state, allMovies: addMovies(action.tmdbMovies.results, state.allMovies) }

    default:
      return state
  }
}
