import React, { Component } from 'react';
import { Button, FormGroup, Form, Input } from 'reactstrap';


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
            this.props.updateChatMessages(this.props.index, input);
            this.setState({
                input: ""
            })
        }
    }

    render() {
        let selectedChat = this.props.selectedChat;
        let name = selectedChat.name;
        let messages = selectedChat.messages;

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
                    <h1 className="mt-2">{name}</h1>
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


