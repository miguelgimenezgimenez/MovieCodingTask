import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Iframe from 'react-iframe'
import Favorite from 'react-icons/lib/md/add-circle'

import { getMovie } from '../../actions/getMovie'
import style from './style.scss'

class MovieDetail extends React.Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.movieId)
  }
  storeMovie() {
    const favorites = JSON.parse(localStorage.getItem('favourites')) || []

    const { poster_path, id } = this.props.movie.movieDetails

    const dataToStore = { poster_path, id }
    if (!favorites.find(movie => movie.id === id)) {
      favorites.push(dataToStore)
    }

    localStorage.setItem('favourites', JSON.stringify(favorites))
  }
  render() {
    const { movieDetails } = this.props.movie

    if (!movieDetails) {
      //when element is not loaded
      return null
    }

    // below are the movie details we will be showing
    const director = movieDetails.credits.crew.find(item => {
      return item.job === 'Director'
    })
    const cast = movieDetails.credits.cast
      .map(item => item.name)
      .slice(0, 5)
      .join(',')
    const genres = movieDetails.genres.map(item => item.name).join(',')
    const url = `http://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`
    let youtubeUrl = movieDetails.videos.results
    if (youtubeUrl.length) {
      youtubeUrl = youtubeUrl[0].key
    }
    return (
      <div className={style.container}>
        <div style={{ height: 150 }} />
        <div className={style.movie}>
          <div
            style={{
              background: `url(${url}) no-repeat`,
              backgroundSize: 'contain',
              height: 380,
              width: 250
            }}
          />
          <div className={style.description}>
            <span style={{ fontSize: 25 }}>
              {movieDetails.title}
              <Favorite
                className={style.favorite}
                onClick={() => this.storeMovie()}
              />
            </span>
            <span style={{ marginTop: 5 }}>Genres: {genres}</span>
            <span style={{ marginTop: 5 }}>Director: {director.name}</span>
            <span style={{ marginTop: 5 }}>Cast: {cast}</span>
            <span style={{ marginTop: 5 }}>{movieDetails.overview}</span>
            <span style={{ marginTop: 5 }}>
              Rating:{movieDetails.vote_average}
            </span>
          </div>
        </div>
        <div style={{ margin: '30px auto' }}>
          <Iframe
            url={`http://www.youtube.com/embed/${youtubeUrl}`}
            width="680px"
            height="380px"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { movie: state.movie }
}

const mapDispatchToProps = dispatch => ({
  getMovie: endpoint => dispatch(getMovie(endpoint))
})
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
