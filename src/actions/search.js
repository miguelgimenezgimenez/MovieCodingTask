import config from '../../config.json'
const { tmdbApiKey } = config[process.env.NODE_ENV]

export const search = (query) => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&language=en-US&query=${query}`).then(
      (response) => {
        if (response.status !== 200) {
          return dispatch({ type: 'SEARCH_ERROR' })
        }
        response.json().then((movies) => {
          dispatch({
            type: 'SEARCH_SUCCESS',
            movies
          })
        })
      }
    )
  }
}
