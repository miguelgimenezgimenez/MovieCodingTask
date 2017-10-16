import React from 'react'
import genres from '../../genres'
import { connect } from 'react-redux'

import MovieDisplay from '../../components/MovieDisplay'
import style from './style.scss'

class Favourites extends React.Component {
  render() {
    const movies = JSON.parse(localStorage.getItem('favourites'))||[]

    return (
      <div>
        <div style={{ height: 200 }} />
        <div className={style.title}>My Favourites</div>

        <MovieDisplay movies={movies} />
      </div>
    )
  }
}

export default Favourites
