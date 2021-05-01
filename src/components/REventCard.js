import React, { Fragment } from 'react';
import rob from './assets/images/rob1.jpg';

const REventCard = (props) => {
    return (
        <Fragment>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="card">
                    <div className="card-body">
                        <img src={rob} alt="img" className=" mb-3"/>
                        <h3>{props.etitle}</h3>
                        <p>{props.edesc}</p>
                        <div className="d-flex flex-row justify-content-center">
                            <div className="p-3">
                                <a href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </div>
                            <div className="p-3">
                                <a href="#">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                            <div className="p-3">
                                <a href="#">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                            <div className="p-3">
                                <a href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default REventCard
