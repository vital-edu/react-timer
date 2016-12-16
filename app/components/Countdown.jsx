import Clock from 'Clock';
import CountdownForm from 'CountdownForm'
import React from 'react';

export default class Countdwon extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped',
    };
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTime();
          break;
      }
    }
  }

  startTime () {
    setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount > 0 ? newCount : 0
      });
    }, 1000);
  }

  handleSetCountdown (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
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
