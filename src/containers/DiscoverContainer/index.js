import React from 'react'
import { connect } from 'react-redux'
import { tmdbDiscover } from '../../actions/tmdbDiscover'
import { Link } from 'react-router-dom'
import MovieDisplay from '../../components/MovieDisplay'
import style from './style.scss'

class DiscoverContainer extends React.Component {
  componentDidMount() {
    this.props.tmdbDiscover(this.props.genre)
  }
  render() {
    const genre = this.props.genre.name
    console.log(genre)
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
  console.log(ownProps)
  console.log(state)
  return {
    [ownProps.genre.name]: state[ownProps.genre.name],
  }
}

const mapDispatchToProps = dispatch => ({
  tmdbDiscover: endpoint => dispatch(tmdbDiscover(endpoint)),
})
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer)
