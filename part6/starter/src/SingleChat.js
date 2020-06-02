import React, { Component } from 'react';
import { Button, FormGroup, Form, Input } from 'reactstrap';
import firebase from 'firebase/app';

export default class SingleChat extends Component {

    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    onHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    sendMessage = (e) => {
        e.preventDefault();
        let input = this.state.input;
        if (input) {
            let id = this.props.selectedChat.id;
            let chat = this.props.selectedChat;
            if (!chat.messages) {
                chat.messages = [];
            }
            chat.messages.push({ content: input, sender: false });
            // push chat message to firebase
        }
    }

    render() {
        let selectedChat = this.props.selectedChat;
        let name = selectedChat.name;
        let messages = selectedChat.messages || [];

        let renderedMessages = messages.map((message, i) => {
            return (
                <li key={i} className="chat list-group-item">
                    <div className={`chat-content text-${message.sender ? "right" : "left"} w-100`}>
                        <div>{message.content}</div>
                    </div>
                </li>
            );
        });
        return (
            <div>
                <Button color="primary" onClick={this.props.resetChat}>Back</Button>
                <div>
                    <h1>{name}</h1>
                    <div className="box">
                        <ul className="message-box">
                            {renderedMessages}
                        </ul>
                        <Form className="input" onSubmit={this.sendMessage}>
                            <FormGroup className="d-flex">
                                <Input type="text" name="input" value={this.state.input} onChange={this.onHandleChange} placeholder="Message..."></Input>
                                <Button onClick={this.sendMessage}>Send</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}


