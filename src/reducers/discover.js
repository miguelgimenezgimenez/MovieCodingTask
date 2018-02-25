export default (genre) => (state = {}, action) => {
  
  const type = `GET_${genre.toUpperCase()}_SUCCESS`
  switch (action.type) {
    case type:
      return { ...state, movies:action.tmdbMovies.results }

    default:
      return state
  }
}
