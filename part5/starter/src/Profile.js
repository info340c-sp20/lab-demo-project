import React, { Component } from 'react';

class Profile extends Component {

    render() {
        let user = this.props.user;
        let interests = user.interests.map((interest) => {
            return <li key={interest}>{interest}</li>
        });
        return (
            <div>
                <h1>Profile</h1>
                <div className="box">
                    <div className="person card"><img width="100%" src={user.pic} alt={user.name}
                        className="card-img-top" />
                        <div className="card-body">
                            <div className="card-title">{user.fName} {user.lName}, {user.age}</div>
                            <div className="card-subtitle">{user.profession}</div>
                            <p className="card-text">{user.bio}</p>
                            <div>
                                <h3>Interests</h3>
                                <ul>
                                    {interests}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Profile;
