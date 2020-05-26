import React, { Component } from 'react';
import Chats from './Chat';
import People from './People';
import Profile from './Profile';
import 'whatwg-fetch';
import { Alert } from 'reactstrap';

export default class Main extends Component {

    state = {
        people: [],
        chats: [],
        errorMessage: null
    }

    componentDidMount() {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    chats: data.chats,
                    people: data.profiles
                })
            })
            .catch(() => {
                this.setState({
                    errorMessage: "Data could not be loaded unfortunately! Please try again."
                });
            });
    }

    addPersonToChat = (person) => {
        // add person!
        let newChats = this.state.chats;
        newChats.push(person);
        this.setState({
            chats: newChats 
        });
    }

    updateChatMessages = (index, content) => {
        let messages = this.state.chats[index].messages;
        messages.push({
            content: content,
            sender: true
        })
        this.setState({
            chats: this.state.chats
        })
    }

    render() {
        let content;

        if (this.props.page === "people") {
            content = <People people={this.state.people} pageCallback={this.props.pageCallback} addCallback={this.addPersonToChat} />
        } else if (this.props.page === "chats") {
            content = <Chats chats={this.state.chats} updateChatMessages={this.updateChatMessages} />;
        } else {
            content = <Profile user={this.props.user} />
        }

        return (
            <main>
                {this.state.errorMessage && <Alert color="danger">{this.state.errorMessage}</Alert>}
                {content}
            </main>
        );
    }

}