import React, { Fragment } from 'react';
import './assets/css/REvent.css'
import REventCard from './REventCard';
import COVIHACK from './assets/images/events_image/covihack_copy.jpeg'
import UX from './assets/images/events_image/ux_ui.jpeg'
import APP from './assets/images/events_image/app_dev_vo.jpeg'
import LETCA from './assets/images/events_image/lets_code_mobile_app.jpeg'
import KGCP from './assets/images/events_image/kgcp.jpeg'
import QCJ from './assets/images/events_image/QCJ.jpeg'

const REvent = () => {
    return (
        <Fragment>
            <div id="event">
                <div className="container my-3 py-5 ">

                    <h1 className="text-center">Upcoming Events</h1>
                    <div className="row mt-5">

                        <REventCard 
                            etitle="CoViHaCk'21" 
                            edesc="Stay Tuned for the updates ..."
                            eimg={COVIHACK}
                        />    

                    </div>

                    <hr/>

                    <h1 className="text-center">Past Events</h1>
                    <div className="row mt-5">

                        
                        <REventCard 
                            etitle="QwickLabs Workshop" 
                            edesc="Speaker : Shashank Barki"
                            eimg={QCJ}
                        />
                        <REventCard 
                            etitle="Kickstart with GCP" 
                            edesc="Speaker : Vijeta Pai"
                            eimg={KGCP}
                        />
                        <REventCard 
                            etitle="Lets Code App" 
                            edesc="Speaker : Ayushma Agarwal"
                            eimg={LETCA}
                        />
                        <REventCard 
                            etitle="App-Dev Workshop" 
                            edesc="Speaker : Arpit Kulshrestha"
                            eimg={APP}
                        />
                        <REventCard 
                            etitle="Ui/Ux Workshop" 
                            edesc="Speaker : Kishore Theeraj"
                            eimg={UX}
                        />

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default REvent
