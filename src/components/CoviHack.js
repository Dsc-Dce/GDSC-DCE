import React, { Fragment } from 'react'
import CoviHack_Schedule from './CoviHack_Schedule'
import Covihack_Sponsors from "./Covihack_Sponsors";
import Covihack_Header from './Covihack_Header';
const CoviHack = () => {
    return (
        <Fragment>
            <Covihack_Header/>
            <CoviHack_Schedule/>
            <Covihack_Sponsors />
        </Fragment>
    )
}

export default CoviHack
