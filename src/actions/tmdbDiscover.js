export const tmdbDiscover = endpoint => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=77a22f81efdd5041eb5108dacd15f6e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${endpoint.id}`
    ).then(response => {
      if (response.status !== 200) {
        // ======================================================
        // here the correct thing would be to dispatch DISCOVER_ERROR
        // ======================================================
        console.log('Looks like there was a problem.  ' + response);
        return;
      }
      response.json().then(movies => {
        dispatch({
          type: 'DISCOVER_SUCCESS',
          tmdbMovies: movies,
          genre: endpoint.name
        });
      });
    });
  };
};
