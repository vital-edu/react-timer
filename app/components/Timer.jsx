import Clock from 'Clock';
import Controls from 'Controls';
import React from 'react';

export default class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      timerStatus: 'paused',
      count: 0,
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTime();
          break;
        case 'stopped':
          this.setState({
            count: 0,
            timerStatus: 'paused',
          });
        case 'paused':
          clearInterval(this.time);
          break;
      }
    }
  }

  componentWillUnmount () {
    clearInterval(this.time);
  }

  startTime () {
    this.time = setInterval(() => {
       this.setState({
         count: this.state.count + 1,
       });
    }, 1000);
  }

  handleStatusChange (newStatus) {
    this.setState({timerStatus: newStatus});
  }

  render () {
    let { count, timerStatus } = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls clockStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
}
