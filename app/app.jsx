import 'style!css!sass!applicationStyles';

import {
  IndexRoute,
  Route,
  Router,
  hashHistory,
} from 'react-router';

import Countdown from 'Countdown';
import Main from 'Main';
import React from 'react';
import ReactDOM from 'react-dom';
import Timer from 'Timer';

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="/countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
