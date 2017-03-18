// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory, Link } from 'react-router';
import '../css/common.scss';
// import 'bootstrap';

import Home from './home/index';
import Chat from './chat/index';
import Login from './login/index';
import Information from './information/index';
import Me from './me/index';


class Application extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <IndexRedirect to="/login" />
      <Route path="/chat/:chatContent" component={Chat}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/information" component={Information}></Route>
      <Route path="/me" component={Me}></Route>
      <Route path="/login" component={Login}></Route>
    </Route>
  </Router>
), document.getElementById('app'));

