import React, { Fragment } from 'react';
import CoviHack_Schedule from './CoviHack_Schedule';
import Covihack_Tracks from "./Covihack_Tracks";
import Covihack_Sponsors from "./Covihack_Sponsors";
import Covihack_Header from './Covihack_Header';
import Covihack_Events from './Covihack_Events'
const CoviHack = () => {
    return (
        <Fragment >
            <div className="covihack-page">
            <Covihack_Header/>
            <CoviHack_Schedule/>
            <Covihack_Events/>

            <Covihack_Tracks />
            <Covihack_Sponsors />
            </div>
        </Fragment>
    )
}

export default CoviHack
