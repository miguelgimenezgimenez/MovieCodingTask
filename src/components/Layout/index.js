import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import style from './style.scss'
import HomeIcon from 'react-icons/lib/md/home'
import genres from '../../genres'

import Autocomplete from 'react-toolbox/lib/autocomplete'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  handleChange(value) {
    this.setState({
      search: value
    })
  }
  render() {
    // the solution below is just a dirty workaround to get this working only when all the genres are loaded but wouldnt be the production solution
    let movies = []
    const genres = Object.keys(this.props.discover)
    if (genres.length === 19) {
      genres.forEach(genre => {
        movies = movies.concat(
          this.props.discover[genre].map(item => item.title)
        )
      })
      // filter only unique values
      movies = movies.filter(
        (movie, i, refArray) => refArray.indexOf(movie) == i
      )
    }

    console.log(movies)
    return (
      <div className={style.navigationBar}>
        <div className={style.upperNav}>
          <HomeIcon className={style.homeIcon} />
          <div className={style.user}>
            <button className={style.button} type="submit">
              Favourites
            </button>

            <div className={style.avatar} />
          </div>
        </div>
        <div className={style.lowerNav}>
          <div className={style.search}>
            <Autocomplete
              style={{ backgroundColor: 'white' }}
              direction="down"
              label="Search for a Movie..."
              multiple={false}
              onChange={(val)=>this.handleChange(val)}
              source={movies}
              value={this.state.search}
            />
            <Button
              className={style.button}
              style={{ height: 25 }}
              type="submit"
            >
              Go!
            </Button>
          </div>
        </div>

        {this.props.children}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { discover: state.discover }
}

export default connect(mapStateToProps)(Layout)
