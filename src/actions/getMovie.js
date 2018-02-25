import config from '../../config.json'
const { tmdbApiKey } = config[process.env.NODE_ENV]

export const getMovie = (movieId) => {
  return (dispatch) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdbApiKey}&language=en-US&append_to_response=videos,credits`
    ).then((response) => {
      if (response.status !== 200) {
        // ======================================================
        // here the correct thing would be to dispatch MOVIE_ERROR
        // ======================================================
        console.log('search error', response)
      }
      response.json().then((movie) => {
        dispatch({
          type: 'MOVIE_SUCCESS',
          movie
        })
      })
    })
  }
}
