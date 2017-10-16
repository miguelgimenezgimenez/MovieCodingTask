import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import style from './style.scss'
import HomeIcon from 'react-icons/lib/md/home'
import genres from '../../genres'
import { tmdbSearch } from '../../actions/tmdbSearch'
import Autocomplete from 'react-toolbox/lib/autocomplete'
import { Link } from 'react-router-dom'

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
  handleClick() {
    // this.props.tmdbSearch(this.state.search)
    this.props.history.push(`/search/${this.state.search}`)
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

    return (
      <div className={style.navigationBar}>
        <div className={style.upperNav}>
          <Link to="/">
            <HomeIcon className={style.homeIcon} />
          </Link>
          <div className={style.user}>
            <Link to="favourites">
              <button className={style.button} type="submit">
                Favourites
              </button>
            </Link>
            <div className={style.avatar} />
          </div>
        </div>
        <div className={style.lowerNav}>
          <div className={style.search}>
            <Autocomplete
              className={style.autocomplete}
              style={{
                backgroundColor: '#f1f1f1',
                border: 'solid 4px #24313C',
                marginLeft: -10
              }}
              direction="down"
              hint="  Search for a Movie..."
              multiple={false}
              onChange={val => this.handleChange(val)}
              source={movies}
              onKeyPress={e => this.handleChange(e.target.value)}
              value={this.state.search}
            />

            <Button
              className={style.button}
              style={{ height: 25 }}
              type="submit"
              onClick={() => this.handleClick()}
            >
              Search!
            </Button>
          </div>
        </div>

        {this.props.children}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  tmdbSearch: query => dispatch(tmdbSearch(query))
})
const mapStateToProps = state => {
  return { discover: state.discover }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
