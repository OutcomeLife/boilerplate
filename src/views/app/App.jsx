import React, { Component } from 'react';
import Routes from '../Routes.jsx';
import { Navbar } from 'views';

class App extends Component {
  componentDidMount() {
    /* Remove the loading spinner */
    document.getElementById( 'mounting-preview' ).remove();
  }

  render() {
    return (
      <main>
        <Navbar />
        <Routes />
      </main>
    );
  }
}

export default App;
