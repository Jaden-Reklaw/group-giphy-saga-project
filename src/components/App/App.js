import React, { Component } from 'react';

//Import Header for all pages
import Header from '../Header/Header';

//Import other components here
import GiphyForm from '../GiphyForm/GiphyForm';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <GiphyForm />
      </div>
    );
  }
  
}

export default App;
