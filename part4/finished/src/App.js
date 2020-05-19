import React, { Component } from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

  constructor() {
    super();
    this.state = {
      chats: []
    }
  }

  componentDidMount() {
    fetch("data.json")
    .then((resp) => {
      return resp.json()
    })
    .then((data) => {
      this.setState({
        chats: data.chats
      })
    })
  }


  render() {
    return (
      <div>
        <Nav />
        <Main chats={this.state.chats} />
        <Footer />
      </div>
    );
  }

}

export default App;
