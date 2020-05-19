import React, { Component } from 'react';
import Chats from './Chat';

export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            search: ""
        }
    }


    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="search">Search</label>
                            <input className="form-control" id="search" type="text" placeholder="Search..." value={this.state.search} onChange={this.onChange} name="search"></input>
                        </div>
                    </form>
                </div>
                <Chats chats={this.props.chats.filter((chat) => chat.name.toLowerCase().includes(this.state.search.toLowerCase()))} />
            </main>
        );
    }

}