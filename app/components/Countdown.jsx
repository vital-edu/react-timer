import Clock from 'Clock';
import React from 'react';

export default class Countdwon extends React.Component {
  render () {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
}