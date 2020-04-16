import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

//Import Header for all pages
import Header from '../Header/Header';
//Import individual pages here

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Router>
          {/* <Route exact path='/' component={SearchPage} /> */}
          <Route path='/favorites' component={Favorites} />
        </Router> 
      </div>
    );
  }
  
}

export default App;
