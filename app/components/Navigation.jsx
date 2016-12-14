import {IndexLink, Link} from 'react-router';

import React from 'react';

export default class Navigation extends React.Component {
  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Timer App
            </li>
            <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
            <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://github.com/vital-edu">Eduardo Vital</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

