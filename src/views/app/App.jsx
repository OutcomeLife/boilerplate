import React, { Component } from 'react';
import Routes from '../Routes.jsx';
import { Navbar, ThemeProvider } from 'views';

class App extends Component {
  componentDidMount() {
    /* Remove the loading spinner */
    document.getElementById( 'mounting-preview' ).remove();
  }

  render() {
    return (
      <ThemeProvider theme="base">
        <Navbar />
        <Routes />
      </ThemeProvider>
    );
  }
}

export default App;
