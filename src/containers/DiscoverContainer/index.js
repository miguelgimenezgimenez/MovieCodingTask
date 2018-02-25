import React from 'react'
import { connect } from 'react-redux'
import { getGenreMovies } from '../../actions/getGenreMovies'
import { Link } from 'react-router-dom'
import MovieDisplay from '../../components/MovieDisplay'
import style from './style.scss'

class DiscoverContainer extends React.Component {
  componentDidMount() {
    this.props.getGenreMovies(this.props.genre)
  }
  render() {
    const genre = this.props.genre.name
    const movies = this.props[genre].movies || []
    return (
      <div className={style.container}>
        <div className={style.title}>
          <div className={style.type}>{movies.length ? genre : ''}</div>
        </div>
        <MovieDisplay movies={movies} />
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    [ownProps.genre.name]: state[ownProps.genre.name],
  }
}

const mapDispatchToProps = dispatch => ({
  getGenreMovies: endpoint => dispatch(getGenreMovies(endpoint)),
})
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer)
