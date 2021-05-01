import React, { Fragment } from 'react';
import './assets/css/REvent.css'
import REventCard from './REventCard';

const REvent = () => {
    return (
        <Fragment>
            <div id="event">
                <div className="container my-3 py-5 ">

                    <h1 className="text-center">Upcomming Events</h1>
                    <div className="row mt-5">

                        <REventCard etitle="CoViHaCk'21" edesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fuga."/>    

                    </div>

                    <hr/>

                    <h1 className="text-center">Past Events</h1>
                    <div className="row mt-5">

                        
                        <REventCard etitle="BuzzQuizz" edesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fuga."/>
                        <REventCard etitle="App-Dev" edesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fuga."/>
                        <REventCard etitle="Ui/Ux Design" edesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fuga."/>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default REvent
