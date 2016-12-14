import Navigation from './Navigation';
import React from 'react';

function Main (props) {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main;