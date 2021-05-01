import React, { Fragment } from 'react';
import rob from './assets/images/rob1.jpg';
import './assets/css/REvent.css'
import REventCard from './REventCard';

const REvent = () => {
    return (
        <Fragment>
            <div id="event">
                <div className="container my-3 py-5 text-center">
                    <h1>Past Events</h1>
                    <div className="row mt-5">

                        <REventCard/>
                        <REventCard/>
                        <REventCard/>
                        <REventCard/>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default REvent
