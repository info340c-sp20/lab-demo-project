import React, { Component } from 'react';
import SingleChat from './SingleChat';

export default class Chats extends Component {

    constructor() {
        super();
        this.state = {
            showChats: true,
            selectedChat: null
        }
    }

    selectChat = (index) => {
        this.setState({
            selectedChat: index,
            showChats: false
        })
    }

    resetChat = () => {
        this.setState({
            selectedChat: null,
            showChats: true
        })
    }

    render() {
        let chats = this.props.chats;
        let renderedChats = chats.map((chat, i) => {
            let lastMessage = { content: "", sender: false };
            if (chat.messages) {
                let lastMessageIndex = chat.messages.length - 1;
                lastMessage = chat.messages[lastMessageIndex] || { content: "", sender: false }
            }
            let { content, sender } = lastMessage;
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
                {this.state.showChats ?
                    <div>
                        <h1>Chats</h1>
                        <div className="box">
                            <ul className="chat-box list-group" id="chat">
                                {renderedChats}
                            </ul>
                        </div>
                    </div>
                    :
                    <SingleChat resetChat={this.resetChat} updateChatMessages={this.props.updateChatMessages} index={this.state.selectedChat} selectedChat={this.props.chats[this.state.selectedChat]} />
                }
            </div>
        );
    }

}