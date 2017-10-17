import React from 'react'
import genres from '../../genres'
import { connect } from 'react-redux'

import DiscoverContainer from '../../containers/DiscoverContainer'
import style from './style.scss'

class Discover extends React.Component {
  renderMovies() {
    return genres.map(genre => {
      return <DiscoverContainer key={genre.id} genre={genre} />
    })
  }

  render() {
    return <div className={style.discover}>{this.renderMovies()}</div>
  }
}

export default Discover
