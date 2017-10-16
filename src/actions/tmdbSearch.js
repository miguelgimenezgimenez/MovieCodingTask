export const tmdbSearch= query => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=77a22f81efdd5041eb5108dacd15f6e0&language=en-US&query=${query}`
    ).then(response => {
      if (response.status !== 200) {
        return dispatch({ type: 'SEARCH_ERROR' })
      }
      response.json().then(movies => {
        dispatch({
          type: 'SEARCH_SUCCESS',
          movies
        })
      })
    })
  }
}
