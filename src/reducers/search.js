export default (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_SUCCESS':
      return { ...state, movies: action.movies.results }

    case 'SEARCH_ERROR':
      return { ...state, movies: 'not found' }

    default:
      return state
  }
}
