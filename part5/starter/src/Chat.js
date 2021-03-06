import React, { Component } from 'react';
import SingleChat from './SingleChat';

export default class Chats extends Component {

    constructor() {
        super();
        this.state = {
            showChatList: true,
            selectedChat: null
        }
    }

    selectChat = (index) => {
        this.setState({
            selectedChat: index,
            showChatList: false
        })
        // set selected chat
    }

    resetChat = () => {
        // reset chat
        this.setState({
            selectedChat: null,
            showChatList: true
        })
    }

    render() {
        let chats = this.props.chats;
        let renderedChats = chats.map((chat, i) => {
            let lastMessageIndex = chat.messages.length - 1;
            let lastMessage = chat.messages[lastMessageIndex] || { content: "", sender: false };
            let { content, sender } = lastMessage;
            // object destructuring
            return (
                <li key={chat.name + " " + i} className="chat list-group-item" onClick={() => this.selectChat(i)}>
                    <div><img className="chat-pic" src={chat.pic} alt={chat.name} /></div>
                    <div className="chat-content">
                        <h4>{chat.name} {chat.unread && <span className="unread"></span>}</h4>
                        <div> {sender && <strong>You:</strong>} {content}</div>
                    </div>
                </li>
            )
        });
        return (
            <div>
                {this.state.showChatList ?
                    <div>
                        <h1>Chats</h1>
                        <div className="box">
                            <ul className="chat-box list-group" id="chat">
                                {renderedChats}
                            </ul>
                        </div>
                    </div>
                    :
                    <SingleChat updateChatMessages={this.props.updateChatMessages} resetChat={this.resetChat} index={this.state.selectedChat} selectedChat={this.props.chats[this.state.selectedChat]} />
                }
            </div>
        );
    }

}