import React from 'react'
import { connect } from 'react-redux'
import { tmdbDiscover } from '../../actions/tmdbDiscover'
import { Link } from 'react-router-dom'
import style from './style.scss'

class GenreContainer extends React.Component {
  componentDidMount() {
    this.props.tmdbDiscover(this.props.genre)
  }
  render() {
    const genre = this.props.genre.name
    const discover = this.props.discover[genre] || []
    const movies = discover.map(movie => {
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
        <div className={style.genreName}>{discover.length ? genre : ''}</div>
        <div className={style.genreContainer}>{movies}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { discover: state.discover }
}

const mapDispatchToProps = dispatch => ({
  tmdbDiscover: endpoint => dispatch(tmdbDiscover(endpoint))
})
export default connect(mapStateToProps, mapDispatchToProps)(GenreContainer)
