import Navigation from './Navigation';
import React from 'react';

function Main (props) {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <h1>Boilerplate App!</h1>
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main;