export default (state = {}, action) => {
  switch (action.type) {
    case 'DISCOVER_SUCCESS':
      return { ...state, [action.genre]: action.tmdbMovies.results }

    default:
      return state
  }
}
