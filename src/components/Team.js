import React, { Fragment } from 'react';
import tech from './assets/images/tech1.jpg';
import rob from './assets/images/rob1.jpg';
import './assets/css/Team.css';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <Fragment>
            <div className="profile-area ">
                <div className="container">
                    <h1 id="heading">Our Tem Members</h1>
                    <div className="row">
                        <TeamCard/>
                        <TeamCard/>
                        <TeamCard/>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team
