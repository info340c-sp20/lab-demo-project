import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }

}

class Nav extends Component {

  render() {
    return (
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="nav-link nav-brand" href="/">
            <img src="img/logo.png" className="logo" />
            Fandom Finder
            </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <a className="nav-link" href="/">Home</a>
              <a className="nav-link" href="/index2.html">Chats</a>
              <a className="nav-link" href="/index3.html">Profile</a>
            </ul>
          </div>
        </nav>
      </nav>
    )
  }

}

class Footer extends Component {

  render() {
    return (
      <footer>
        <address className="center">
          2020 &copy; FF
        </address>
      </footer>
    );
  }

}


const chats = [
  {
    name: "Charlie",
    pic: "img/tony.JPG",
    lastMessage: "Your suit looks so great!",
    from: true,
    unread: false
  },
  {
    name: "Kevin",
    pic: "img/legolas.JPG",
    lastMessage: "Thanks dude!",
    from: false,
    unread: true
  },
  {
    name: "Emma",
    pic: "img/widow.jfif",
    lastMessage: "Wow that's really impresssive!",
    from: false,
    unread: true
  },
  {
    name: "Naruto",
    pic: "img/naruto.JPG",
    lastMessage: "You look great!",
    from: true,
    unread: false
  },
  {
    name: "Naruto",
    pic: "img/naruto.JPG",
    lastMessage: "You look great!",
    from: true,
    unread: true
  }
];

class Main extends Component {

  render() {
    // Chat -> chat, key
    let renderedChats = chats.map((chat, index) => {
      return <Chat chat={chat} message="hi" key={index} />;
    });
    return (
      <main>
        <h1>Chats</h1>
        {/* <!-- Chat area --> */}
        <div className="box">
          <ul className="chat-box list-group" id="chat">
            {renderedChats}
          </ul>
        </div>
      </main>
    );
  }

}

class Chat extends Component {

  render() {
    console.log(this.props)
    let chat = this.props.chat;
    let name = chat.name;
    let pic = chat.pic;
    let lastMessage = chat.lastMessage;
    let unread = chat.unread;
    let from = chat.from;
    return (
      <li className="chat list-group-item">
        <div><img className="chat-pic" src={pic} alt={name} /></div>
        <div className="chat-content">
        <h4>{name} {unread && <span className="unread"></span>}</h4>
        <div>{from && <strong>You:</strong>} {lastMessage}</div>
        </div>
      </li>
    );
  }

}

export default App;