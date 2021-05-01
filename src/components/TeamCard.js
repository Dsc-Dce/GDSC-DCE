import React, { Fragment } from 'react';
import tech from './assets/images/tech1.jpg';
import rob from './assets/images/rob1.jpg';

const TeamCard = (props) => {
    return (
        <Fragment>
            <div className="col-lg-4 col-md-6 mt-4">
                <div className="card">
                    <div className="img1"><img src={tech} alt="tech"/></div>
                    <div className="img2"><img src={props.Mphoto} alt="rob"/></div>
                    <div className="main-text">
                        <h2>{props.Mname}</h2>
                        <p>{props.Mdesc}</p>
                    </div>
                    <div className="socials">
                        {/* <i className="fa fa-facebook"></i> */}
                        <a href={props.link} target="blank"><i className="fa fa-linkedin"></i></a>
                        {/* <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TeamCard
