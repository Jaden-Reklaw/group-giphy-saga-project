import React, { Component } from 'react';

//Import Modules for routing pages
import { HashRouter as Router, Route, Link} from 'react-router-dom';

//Import styles
import './Header.css';

//Import Components
import Favorites from '../Favorites/Favorites';

class Header extends Component {
    render() {
      return (
        
        <header>
            <h1>Giphy Treasury</h1>
            <Router>
                <nav className='sticky'>
                    <ul className="main-nav">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/favorites'>Favorites</Link></li>
                    </ul>
                </nav>
                    {/* <Route exact path='/' component={Search} /> */}
                    <Route path='/favorites' component={Favorites} />
            </Router> 
        </header>
      );
    }
  }
  
  export default Header;