import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.scss'

const MovieDisplay = props => {
  const movies = props.movies.map(movie => {
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
  return <div className={style.MoviesContainer}>{movies}</div>
}
export default MovieDisplay
