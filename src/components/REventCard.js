import React, { Fragment } from 'react';
import rob from './assets/images/rob1.jpg';

const REventCard = (props) => {
    return (
        <Fragment>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="card">
                    <div className="card-body">
                        <img src={props.eimg} alt="img" className=" mb-3"/>
                        <h3>{props.etitle}</h3>
                        <p>{props.edesc}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default REventCard
