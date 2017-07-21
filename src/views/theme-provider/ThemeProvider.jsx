import React, { Component } from 'react';
import { node, string } from 'prop-types';

class ThemeProvider extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ThemeProvider;
