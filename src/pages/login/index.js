import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.scss';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1><Link to="/information">Auto redirect</Link></h1>
      </div>
    );
  }
}