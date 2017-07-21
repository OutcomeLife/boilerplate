import 'styles/themes/loader.scss';
import React, { Component } from 'react';
import { node, string } from 'prop-types';

class ThemeProvider extends Component {
  static propTypes = {
    children: node,
    theme: string.isRequired,
  }

  render() {
    const { children, theme } = this.props;
    return (
      <div className={`theme theme-${theme}`}>
        {children}
      </div>
    );
  }
}

export default ThemeProvider;
