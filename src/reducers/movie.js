export default (state = {}, action) => {
  switch (action.type) {
    case 'MOVIE_SUCCESS':
      return { ...state, movieDetails: action.movie }
  
    default:
      return state
  }
}
