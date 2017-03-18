import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import './index.scss';

import NavBar from '../../common/components/navbar';
import Footer from '../../common/components/footer';
import HomeImg from '../../img/homeimg.png';

import NewsImage from '../../img/phone.png';
import QueryImage from '../../img/back.png';
import PhoneImage from '../../img/home.png';
import HelpImage from '../../img/share.png';
import DriveImage from '../../img/share.png';
import SelfImage from '../../img/phone.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBar phoneNumber="911" interlocutor="客服001" hasLoggedIn="true"/>
        <img className="HomeImg" src={HomeImg} />
        <div className="RowBox">
          <Link to="/chat/a">
            <div className="Row2">
                <img className="BoxIcon" src={NewsImage}/>
                <p className="BoxText">优惠活动</p>
            </div> 
          </Link>
          <Link to="/chat/query">
            <div className="Row2">
              <img className="BoxIcon" src={QueryImage}/>
              <p className="BoxText">进店咨询</p>
            </div> 
          </Link>
        </div>

        <div className="RowBox">
          <Link to="/chat/phone">
            <div className="Row2">
                <img className="BoxIcon" src={PhoneImage}/>
                <p className="BoxText">优惠活动</p>
            </div> 
          </Link>
          <Link to="/chat/a">
            <div className="Row2">
              <img className="BoxIcon" src={HelpImage}/>
              <p className="BoxText">进店咨询</p>
            </div> 
          </Link>
        </div>

        <div className="RowBox">
          <Link to="/chat/a">
            <div className="Row2">
                <img className="BoxIcon" src={DriveImage}/>
                <p className="BoxText">优惠活动</p>
            </div> 
          </Link>
          <Link to="/chat/a">
            <div className="Row2">
              <img className="BoxIcon" src={SelfImage}/>
              <p className="BoxText">进店咨询</p>
            </div> 
          </Link>
        </div>
      </div>
    );
  }
}