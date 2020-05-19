import React, { Component } from 'react';

export default class Nav extends Component {

    render() {
        return (
            <nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="nav-link nav-brand" href="/">
                        <img src="/img/logo.png" className="logo" />
                        Fandom Finder
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <a className="nav-link" href="#">Home</a>
                            <a className="nav-link" href="#">Chats</a>
                            <a className="nav-link" href="#">Profile</a>
                        </ul>
                    </div>
                </nav>
            </nav>
        );
    }

}