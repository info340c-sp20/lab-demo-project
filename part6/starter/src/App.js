import React, { Component } from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

// config for Styled Firebase UI
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Since we chose to allow sign in as a Google user
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};

class App extends Component {

  state = {
    page: "people",
    user: null
  }

  componentDidMount() {
    this.authUnregFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) { //firebaseUser defined: is logged in
        // using the id of the user, we can get the profile info!
        let id = firebaseUser.uid;
        let userData;
        this.setState({
          user: firebaseUser,
          userData: userData
        });
      }
      else { //firebaseUser undefined: is not logged in
        this.setState({
          user: null
        })
      }
    });
  }

  componentWillUnmount() {
    this.authUnregFunc();
  }

  updatePage = (newPage) => {
    this.setState({
      page: newPage
    })
  }

  render() {
    return (
      <div>
        <Nav page={this.state.page} pageCallback={this.updatePage} user={this.state.user} />
        {this.state.user ?
          <Main page={this.state.page} pageCallback={this.updatePage} user={this.state.user} userData={this.state.userData} />
          :
          <StyledFirebaseAuth firebaseAuth={firebase.auth()} uiConfig={uiConfig} />
        }
        <Footer />
      </div>
    );
  }

}

export default App;
