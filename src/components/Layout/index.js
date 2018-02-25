import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import style from './style.scss'
import HomeIcon from 'react-icons/lib/md/home'
import genres from '../../genres'
import { search } from '../../actions/search'
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
    this.props.history.push(`/search/${this.state.search}`)
  }
  render() {

    return (
      <div className={style.navigationBar}>
        <div className={style.upperNav}>
          <Link to="/">
            <HomeIcon className={style.homeIcon} />
          </Link>
          <div className={style.user}>
            <Link to="/favourites">
              <button className={style.button} type="submit">
                Favourites
              </button>
            </Link>
            <div className={style.avatar} />
          </div>
        </div>
        <div className={style.lowerNav}>
          <div className={style.search}>
            <div onChange={(e) => this.handleChange(e.target.value)}>
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
                onChange={(val) => this.handleChange(val)}
                source={this.props.allMovies}
                value={this.state.search}
              />
            </div>

            <Button className={style.button} style={{ height: 25 }} type="submit" onClick={() => this.handleClick()}>
              Search!
            </Button>
          </div>
        </div>

        {this.props.children}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(search(query))
})
const mapStateToProps = (state) => {

  return {allMovies:state.allMovies.allMovies}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
