export default (state = {}, action) => {
  switch (action.type) {
    case 'MOVIE_SUCCESS':
      const newstate = { ...state, movieDetails: action.movie }
      return newstate

    default:
      return state
  }
}
