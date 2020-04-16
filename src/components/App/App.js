import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';

//Import Modules for routing pages
import { HashRouter as Router, Route} from 'react-router-dom';

//Import Header for all pages

//Import individual pages here

class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Router>
          {/* <Route exact path='/' component={SearchPage} /> */}
          <Route path='/favorites' component={Favorites} />
        </Router> 
      </div>
    );
  }
  
}

export default App;
