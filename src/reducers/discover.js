export default (state = {}, action) => {
  switch (action.type) {
    case 'DISCOVER_SUCCESS':
      const newstate = { ...state, [action.genre]: action.tmdbMovies.results }
      return newstate

    default:
      return state
  }
}