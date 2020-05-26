import React, { Component } from 'react';
import { Button } from 'reactstrap';

class People extends Component {

    state = {
        selectedIndex: 0
    }

    next = (choose) => {
        // move to next person!
        if (choose) {
            let selectedIndex = this.state.selectedIndex;
            let people = this.props.people;
            let selectedPerson = people[selectedIndex];
            let person = {
                name: selectedPerson.name,
                pic: selectedPerson.pic,
                unread: false,
                messages: []
            };
            this.props.addCallback(person);
        }
        this.setState({
            selectedIndex: this.state.selectedIndex + 1
        });
    }

    render() {
        let selectedIndex = this.state.selectedIndex;
        let people = this.props.people;
        let person = people[selectedIndex];

        return (
            <div>
                <h1>Find People</h1>
                <div className="box">
                    {person ?
                        <div className="card">
                            <div>
                                <img id="profile-img" src={person.pic} alt={person.name} className="card-img-top"></img>
                            </div>
                            <div>
                                <div className="card-body">
                                    <div className="card-title" id="title">{person.name}, {person.age}</div>
                                    <div className="card-subtitle" id="profession">{person.profession}</div>
                                    <div className="card-subtitle" id="bio">{person.bio}</div>
                                    <div className="select-area">
                                        <div className="circle red" id="choose" onClick={() => this.next(false)}><span role="img" aria-label="pass">❌</span></div>
                                        <div className="circle green" id="pass" onClick={() => this.next(true)} ><span role="img" aria-label="choose">✔️</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <p>No profiles left.</p>
                            <p>Click to go to your chats to see who you chose!</p>
                            <Button color="primary" onClick={() => this.props.pageCallback("chats")}>Go to Chats</Button>
                        </div>
                    }
                </div>
            </div>
        );
    }

}

export default People;
