import React, { Component } from 'react';

export default class Chats extends Component {

    render() {
        let chats = this.props.chats;
        let renderedChats = chats.map((chat) => {
            return (
                <li key={chat.name} className="chat list-group-item">
                    <div><img className="chat-pic" src={chat.pic} alt={chat.name} /></div>
                    <div className="chat-content">
                        <h4>{chat.name} {chat.unread && <span className="unread"></span>}</h4>
                        <div> {chat.from && <strong>You:</strong>} {chat.lastMessage}</div>
                    </div>
                </li>
            )
        });
        return (
            <div>
                <h1>Chats</h1>
                <div className="box">
                    <ul className="chat-box list-group" id="chat">
                        {renderedChats}
                    </ul>
                </div>
            </div>
        );
    }

}