import React, { PropTypes, Component } from 'react';
import { router, withRouter } from 'react-router';

import homeImg from '../../img/home.png';
import backImg from '../../img/back.png';
import shareImg from '../../img/share.png';
import phoneImg from '../../img/phone.png';
import '../../css/common.scss';

class NavBar extends Component {

  onCalling() {
    console.log("Calling! " + this.props.phoneNumber);
  }
  isShowHome() {
    return !(/home/.test(this.props.router.location.pathname));
  }
  isShowBack() {
    return /information/.test(this.props.router.location.pathname) && this.props.hasLoggedIn;
  }
  isShowShare() {
    return /\bme/.test(this.props.router.location.pathname);
  }  
  isShowPhone() {
    return /chat/.test(this.props.router.location.pathname);
  }
  getHeaderText() {
    switch(this.props.router.location.pathname) {
      case '/home':
        return '主页';
      case '/me':
        return '个人主页';
      case '/information':
        if(this.hasLoggedIn)
          return '修改信息';
        return '注册'
      case '/chat':
        return this.interlocutor;
    }
  }
  isShow() {
    return true;
    return !(/home/.test(this.props.router.location.pathname));
  }

  render() {
    if(this.isShow() === false)
      return;
    return (
      <div className="Header">
        {this.isShowHome() && <img className="TopLeftIcon" alt="icon" src={homeImg} onClick= {() => this.props.router.push('/home')}/> }
        {this.isShowBack() && <img className="TopLeftIcon" alt="icon" src={backImg} onClick= {() => this.props.router.goBack()}/> }
        <p className="HeaderText">{this.getHeaderText()}</p>
        {this.isShowShare() && <img className="TopRightIcon" alt="icon" src={shareImg} onClick= {() => this.props.router.goBack()}/> }
        {this.isShowPhone() && <img className="TopRightIcon" alt="icon" src={phoneImg} onClick= {() => this.onCalling()}/> }
      </div>
    );
  }
}

NavBar.propTypes = {
  phoneNumber: PropTypes.string,
  hasLoggedIn: PropTypes.string.isRequired,
  interlocutor: PropTypes.string,
};

export default withRouter(NavBar);

