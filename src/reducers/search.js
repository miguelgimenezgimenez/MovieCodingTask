export default (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_SUCCESS':
      const newstate = { ...state, movies: action.movies.results }
      return newstate

    default:
      return state
  }
}
