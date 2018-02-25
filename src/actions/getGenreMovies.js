import config from '../../config.json'
const { tmdbApiKey } = config[process.env.NODE_ENV]

export const getGenreMovies = (endpoint) => {
  return (dispatch) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${
        endpoint.id
      }`
    ).then((response) => {
      if (response.status !== 200) {
        // ======================================================
        // here the correct thing would be to dispatch ERROR
        // ======================================================
        console.log('Looks like there was a problem.  ' + response)
        return
      }
      response.json().then((movies) => {
        const genre = endpoint.name.toUpperCase()
        const type = `GET_${genre}_SUCCESS`
        dispatch({
          type,
          tmdbMovies: movies,
          genre: endpoint.name
        })
      })
    })
  }
}
