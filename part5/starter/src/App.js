import React, { Component } from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends Component {

  state = {
    page: "people",
    user: {
      fName: "John",
      lName: "Smith",
      age: "24",
      bio: "Hey! I love attending conventions and cosplaying!",
      interests: ["Games", "Cosplaying", "Larping"],
      pic: "img/witcher.JPG"
    }
  }

  updatePage = (newPage) => {
    this.setState({
      page: newPage
    });
  }

  render() {
    return (
      <div>
        <Nav page={this.state.page} pageCallback={this.updatePage} name={this.state.user.fName} />
        <Main page={this.state.page} pageCallback={this.updatePage} user={this.state.user} />
        <Footer />
      </div>
    );
  }

}

export default App;
