export const tmdbMovie = movieId => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=77a22f81efdd5041eb5108dacd15f6e0&language=en-US&append_to_response=videos,credits`
    ).then(response => {
      if (response.status !== 200) {
        // ======================================================
        // here the correct thing would be to dispatch MOVIE_ERROR
        // ======================================================
        console.log('search error', response)
      }
      response.json().then(movie => {
        dispatch({
          type: 'MOVIE_SUCCESS',
          movie
        })
      })
    })
  }
}
