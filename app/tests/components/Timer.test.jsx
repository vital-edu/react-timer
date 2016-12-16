import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Timer from 'Timer';
import expect from 'expect';

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    expect(timer.state.count).toBe(0);
    expect(timer.state.timerStatus).toBe('started');
    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      done();
    }, 1000);
  });

 it('should pause timer on paused status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 10});
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe('paused');
      done();
    }, 1000);
  });

  it('should reset timer and change status to paused on stopped status', () => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.count).toBe(0);
      expect(timer.state.countdownStatus).toBe('paused');
    }, 1000);
  });
});
