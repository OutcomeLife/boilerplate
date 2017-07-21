import './navbar.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <h1>Boilerplate</h1>
          </Link>
        </div>


        <ul>
          <li>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>

            <ul>
              <li>
                <button className="sidebar-toggle-button">
                  <i className="material-icons">menu</i>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
