import React from 'react'
import genres from '../../genres'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import GenreContainer from '../../containers/GenreContainer'
import style from './style.scss'

class Discover extends React.Component {
  renderMovies() {
    if (Object.keys(this.props.search).length) {
      const movies = this.props.search.movies.map(movie => {
        const url = `http://image.tmdb.org/t/p/w342/${movie.poster_path}`
        const id = movie.id.toString()
        return (
          <Link to={id} key={id} className={style.movieContainer}>
            <div
              style={{
                background: `url(${url}) no-repeat`,
                backgroundSize: 'cover',
                height: 280,
                width: 180
              }}
            />
          </Link>
        )
      })
      return (
        <div>
          <div className={style.results}>
            Results (click on movie for details)
          </div>
          <div className={style.carrousel}>{movies}</div>
        </div>
      )
    }
    return genres.map(genre => {
      return <GenreContainer key={genre.id} genre={genre} />
    })
  }

  render() {
    return <div className={style.discover}>{this.renderMovies()}</div>
  }
}
const mapStateToProps = state => {
  return { search: state.search }
}

export default connect(mapStateToProps)(Discover)
