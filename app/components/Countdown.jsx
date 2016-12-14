import Clock from 'Clock';
import CountdownForm from 'CountdownForm'
import React from 'react';

export default class Countdwon extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleSetCountdown (seconds) {
    this.setState({
      count: seconds,
    });
  }

  render () {
    let {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={(e) => this.handleSetCountdown(e)}/>
      </div>
    );
  }
}