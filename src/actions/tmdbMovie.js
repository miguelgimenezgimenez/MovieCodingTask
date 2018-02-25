import config from '../../config.json'
const apiKey = config[process.env.NODE_ENV]
export const tmdbMovie = movieId => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US&append_to_response=videos,credits`
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
