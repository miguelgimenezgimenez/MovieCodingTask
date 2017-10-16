import React from 'react'
import genres from '../../genres'

import GenreContainer from '../../containers/GenreContainer'
import style from './style.scss'

class Discover extends React.Component {
  renderGenres() {
    return genres.map(genre => {
      return <GenreContainer key={genre.id} genre={genre} />
    })
  }

  render() {
    return <div className={style.discover}>{this.renderGenres()}</div>
  }
}
export default Discover
