import $ from 'jquery';
import Countdown from 'Countdown';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>)
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1000);
    });

    it('should never set count less than zero', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>)
      countdown.handleSetCountdown(1);

      expect(countdown.state.count).toBe(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3000);
    });

    it('should pause contdown on paused status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1000);
    });

    it('should stop contdown on stopped status', () => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      expect(countdown.state.count).toBe(0);
      expect(countdown.state.countdownStatus).toBe('stopped');
    });
  })
});
