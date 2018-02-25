import React from 'react'
import genres from '../../genres'
import { connect } from 'react-redux'
import { search } from '../../actions/search'

import MovieDisplay from '../../components/MovieDisplay'
import style from './style.scss'


class Search extends React.Component {
  componentDidMount() {
    this.props.search(this.props.match.params.query)
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.query != prevProps.match.params.query) {
      this.props.search(this.props.match.params.query)
    }
  }
  render() {
    const movies = this.props.search.movies || []
    return (
      <div className={style.discover}>
        <div style={{ height: 150 }} />
        <div className={style.title}>Results...</div>

        <MovieDisplay movies={movies} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(search(query))
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)
