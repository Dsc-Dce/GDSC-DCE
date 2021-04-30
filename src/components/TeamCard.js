import React, { Fragment } from 'react';
import tech from './assets/images/tech1.jpg';
import rob from './assets/images/rob1.jpg';

const TeamCard = () => {
    return (
        <Fragment>
            <div className="col-md-4 mt-5">
                <div className="card">
                    <div className="img1"><img src={tech} alt="tech"/></div>
                    <div className="img2"><img src={rob} alt="rob"/></div>
                    <div className="main-text">
                        <h2>Person 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia.</p>
                    </div>
                    <div className="socials">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TeamCard
