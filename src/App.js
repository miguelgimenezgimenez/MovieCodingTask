import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Discover from './components/Discover';
import Layout from './components/Layout';
import MovieDetail from './containers/MovieDetail';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Layout} />
          <Route exact path="/" component={Discover} />
          {/* <Route path="/:movieId" component={MovieDetail} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
