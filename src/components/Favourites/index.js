import React from 'react'
import genres from '../../genres'
import { connect } from 'react-redux'

import MoviesContainer from '../../containers/MoviesContainer'
import style from './style.scss'

class Discover extends React.Component {
  renderMovies() {
    return genres.map(genre => {
      return <MoviesContainer key={genre.id} genre={genre} />
    })
  }

  render() {
    return <div className={style.discover}>
      <div style={{height:150}}></div>
      {this.renderMovies()}
    </div>
  }
}


export default (Discover)
