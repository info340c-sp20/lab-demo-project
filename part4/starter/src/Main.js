import React, { Component } from 'react';
import Chats from './Chat';

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
    }
];

export default class Main extends Component {

    render() {
        return (
            <main>
            </main>
        );
    }

}