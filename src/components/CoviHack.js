import React, { Fragment } from 'react'
import CoviHack_Schedule from './CoviHack_Schedule'
import Covihack_Sponsors from "./Covihack_Sponsors";

const CoviHack = () => {
    return (
        <Fragment>
            <h1>this is covihack page.</h1>
            <CoviHack_Schedule/>
            <Covihack_Sponsors />
        </Fragment>
    )
}

export default CoviHack
