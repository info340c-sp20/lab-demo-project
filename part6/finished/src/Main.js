import React, { Component } from 'react';
import Chats from './Chat';
import People from './People';
import Profile from './Profile';
import 'whatwg-fetch';
import { Alert } from 'reactstrap';
import firebase from 'firebase/app';

export default class Main extends Component {

    state = {
        people: [],
        chats: [],
        errorMessage: null
    }

    componentDidMount() {
        firebase.database().ref("chats").on("value", (snapshot) => {
            let data = snapshot.val();
            let chatsData = [];
            Object.keys(data).forEach((key) => {
                let chat = data[key];
                chat.id = key;
                chatsData.push(chat);
            });
            this.setState({
                chats: chatsData
            });
        })
        firebase.database().ref("profiles").once("value", (snapshot) => {
            let data = snapshot.val();
            this.setState({
                people: data
            });
        })
    }

    addPersonToChat = (chat) => {
        let chats = this.state.chats;
        chats.push(chat);
        this.setState({
            chats: chats
        });
    }

    render() {
        let content;
        
        if (this.props.page === "people") {
            content = <People people={this.state.people} pageCallback={this.props.pageCallback} addCallback={this.addPersonToChat} />
        } else if (this.props.page === "chats") {
            content = <Chats chats={this.state.chats} />;
        } else {
            content = <Profile user={this.props.user} userData={this.props.userData} />
        }

        return (
            <main>
                {this.state.errorMessage && <Alert color="danger">{this.state.errorMessage}</Alert>}
                {content}
            </main>
        );
    }

}