import React, { Component } from 'react';
import { Navbar, Button } from 'reactstrap';
import firebase from 'firebase/app';

export default class Nav extends Component {

    render() {
        let pages = [
            {
                name: "Home",
                link: "people"
            },
            {
                name: "Chats",
                link: "chats"
            },
            {
                name: "Profile",
                link: "profile"
            }
        ];
        let renderedLinks = pages.map((page) => {
            return <div className={`nav-link nav-divs ${(this.props.page === page.link) && " active"}`} role="button" key={page.name} onClick={() => this.props.pageCallback(page.link)}>{page.name}</div>
        });
        return (
            <Navbar expand="md" color="light" light>
                <div className="nav-link nav-divs" onClick={() => this.props.pageCallback("people")}>
                    <img src="/img/logo.png" className="logo" alt="Fandom Finder logo" />
                    Fandom Finder
                    </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {renderedLinks}
                    </ul>
                </div>
                {this.props.user &&
                    <div className="d-flex align-items-center">
                        <div className="mr-2 ">
                            Hi, {this.props.user.displayName}!
                        </div>
                        <div>
                            <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
                        </div>
                    </div>
                }
            </Navbar>
        );
    }

}