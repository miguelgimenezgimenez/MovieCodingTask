import React from 'react'
import genres from '../../genres'
import { connect } from 'react-redux'

import MoviesContainer from '../../containers/MoviesContainer'
import style from './style.scss'

class Search extends React.Component {
  render() {
    return (
      <div className={style.discover}>
        <div style={{ height: 150 }} />
        <MoviesContainer query={this.props.match.params.query} />
      </div>
    )
  }
}

export default Search
