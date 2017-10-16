import React from 'react'
import { connect } from 'react-redux'
import { tmdbDiscover } from '../../actions/tmdbDiscover'
import { Link } from 'react-router-dom'
import { tmdbSearch } from '../../actions/tmdbSearch'

import style from './style.scss'

class MoviesContainer extends React.Component {
  componentDidMount() {
    if (this.props.query) {
      return this.props.tmdbSearch(this.props.query);
    }
    this.props.tmdbDiscover(this.props.genre)
  }
  render() {
    let type
    let results = []
    if (this.props.query) {
      results = (this.props.search.movies)||[] 
      type = 'Results...(click on movie for detais)'
    } else {
      type = this.props.genre.name
      results = this.props.discover[type] || []
    }

    const movies = results.map(movie => {
      const url = `http://image.tmdb.org/t/p/w342/${movie.poster_path}`
      const id = movie.id.toString()
      return (
        <Link to={`/movie/${id}}`} key={id} className={style.movieContainer}>
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
      <div className={style.container}>
        <div className={style.type}>{results.length ? type : ''}</div>
        <div className={style.MoviesContainer}>{movies}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { discover: state.discover ,
  search:state.search}
}

const mapDispatchToProps = dispatch => ({
  tmdbDiscover: endpoint => dispatch(tmdbDiscover(endpoint)),
  tmdbSearch: query => dispatch(tmdbSearch(query))
})
export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
