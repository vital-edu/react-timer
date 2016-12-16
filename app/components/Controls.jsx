import React from 'react';

export default class Controls extends React.Component {
  constructor (props) {
    super(props);

    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange (status) {
    return () => this.props.onStatusChange(status);
  }

  render () {
    let { countdownStatus } = this.props;

    let startStopButton = undefined;

    if (countdownStatus === 'started') {
      startStopButton = <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
    } else if (countdownStatus === 'paused') {
      startStopButton = <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
    }

    return (
      <div className="controls">
      { startStopButton }
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired,
};
