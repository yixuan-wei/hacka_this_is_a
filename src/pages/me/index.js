import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import './index.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1><Link to="/Chat">fafssdfCdsfhating</Link></h1>
      </div>
    );
  }
}