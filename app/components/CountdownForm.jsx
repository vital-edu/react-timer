import React from 'react';

export default class CountdownForm extends React.Component {
  constructor (props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();

    let strSeconds = this.refs.seconds.value;

    if (strSeconds.length > 0 && strSeconds.match(/^[\d]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds" label="time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}
