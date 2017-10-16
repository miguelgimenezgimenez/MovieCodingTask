import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Discover from './components/Discover';
import Favourites from './components/Favourites';
import Layout from './components/Layout';
import MovieDetail from './containers/MovieDetail';
import Search from './containers/Search';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Layout} />
          <Route exact path="/" component={Discover} />
          <Route path="/movie/:movieId" component={MovieDetail} />
          <Route path="/search/:query" component={Search} />
          <Route path="/favourites" component={Favourites} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
