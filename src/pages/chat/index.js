import React, { Component } from 'react';
import './index.scss';
import pic1 from '../../img/1.jpg';


class ChatItem extends Component {
  constructor(props) {
    super(props);
  }

  ifShowImage(owner) {
    if (owner) return <img src={pic1} name="rocket" />;
  }

  render() {
    return (
            <div className={`chatbar${this.props.chat.owner}`}>
                {this.ifShowImage(this.props.chat.owner === '1')}
                <div className={`chat${this.props.chat.owner}`}>
                    <div className="dialogarrow">
                    </div>
                    <p> {this.props.chat.chatMessage}</p>
                </div>
                {this.ifShowImage(this.props.chat.owner === '0')}
            </div>
    );
  }


}

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'text',
    };
  }

  render() {
    return (
            <div>
                <div className="chatbox" ref="chatbox">{chats}</div>
            </div>
    );
  }

}
class ChatBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 2,
      chats: [],
    };
    this.handleSubmitISay = this.handleSubmitISay.bind(this);
    this.handleSubmitYouSay = this.handleSubmitYouSay.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/db').then(response => response.json()).then((data) => {
      console.log(this);
      this.setState({ counter: 2, chats: data._embedded.chatRecords.slice() });
    }).catch(e => console.log(e));
  }

  handleSubmitISay(e) {
    const owner = 0;
    e.preventDefault();
    this.setState({
      counter: this.state.chats + 1,
      chats: this.state.chats.concat(newMessage(this.state.counter + 1, owner)),
    });
  }
  handleSubmitYouSay(e) {
    const owner = 1;
    e.preventDefault();
    this.setState({
      counter: this.state.chats + 1,
      chats: this.state.chats.concat(newMessage(this.state.counter + 1, owner)),
    });
  }
  OnSubmitText() {

  }
  render() {
    const chats = this.state.chats.map(chat =>
            <ChatItem key={chat.key} chat={chat}>haha</ChatItem>
        );
    return (
    <div>
      <div className="chatbox" ref="chatbox">{chats}</div>
        <div className="button_sp_area">
            <a href="#" onClick={this.handleSubmitISay} className="weui_btn weui_btn_plain_default">I Say</a>
            <a href="#" onClick={this.handleSubmitYouSay} className="weui_btn weui_btn_plain_primary">You Say</a>
        </div>
    </div>
    );
  }
}

function newMessage(counter, owner) {
  return {
    chatMessage: `I say ${randomString(GetRandomNum(1, 100))}`,
    key: `key${counter}`,
    owner: `${owner}`,
  };
}
function GetRandomNum(Min, Max) {
  const Range = Max - Min;
  const Rand = Math.random();
  return (Min + Math.round(Rand * Range));
}
function randomString(len) {
  　　len = len || 32;
  　　const $chars = 'ABCD  ';    /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  　　const maxPos = $chars.length;
  　　let pwd = '';
  　　for (let i = 0; i < len; i++) {
    　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  　　}
  　　return pwd;
}

export default class Chat extends Component {

  render() {
    return (
      <div className="chat">
          <ChatBox></ChatBox>
      </div>
    );
  }
}
