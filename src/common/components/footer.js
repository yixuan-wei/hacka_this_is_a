import React, { PropTypes, Component } from 'react';
import { router, withRouter } from 'react-router';
import '../../css/common.scss'
class Footer extends Component {
  render() {
    if(this.props.isShow !== 'true')
      return;
    return(
      <div className="Footer">
        <p>微信公众号: 24124</p>
        <p style="font-size:0.8em; color:rgb(230,230,230)">Copyright</p>
      </div>
    );
  }
}
