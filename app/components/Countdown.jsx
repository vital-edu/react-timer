import Clock from 'Clock';
import Controls from 'Controls';
import CountdownForm from 'CountdownForm'
import React from 'react';

export default class Countdwon extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped',
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTime();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          break;
      }
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  startTime () {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount > 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({
          countdownStatus: 'stopped',
        })
      }
    }, 1000);
  }

  handleSetCountdown (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });
  }

  handleStatusChange (newStatus) {
    this.setState({countdownStatus: newStatus});
  }

  render () {
    let {count, countdownStatus} = this.state;

    let controlArea = undefined;

    if (countdownStatus !== "stopped") {
      controlArea = <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
    } else {
      controlArea = <CountdownForm onSetCountdown={this.handleSetCountdown}/>
    }

    return (
      <div>
        <Clock totalSeconds={count}/>
        {controlArea}
      </div>
    );
  }
}
