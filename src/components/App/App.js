import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';

//Import Header for all pages
import Header from '../Header/Header';
//Import individual pages here

class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
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
