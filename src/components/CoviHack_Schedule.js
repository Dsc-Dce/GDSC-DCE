import React, { Fragment } from 'react'
import COVIVID from './assets/CoviHack Page assets/Coming Soon Reel 1080x1920.mp4'
import './assets/css/CoviHack_Schedule.css'

const CoviHack_Schedule = () => {
    return (
        <Fragment>
            <div className="schedule mt-5 mb-5 ">
                <div className="container">
                    <div className="row">
                    <div className="greenbox"></div>
                        <div className="col-md-6 d-flex justify-content-center">

                            <video playsInline autoPlay loop muted id="covivid" className="mt-3 mb-3">
                                <source src={COVIVID} type="video/mp4"/>
                                your browser does not support tag.
                            </video>
                        </div>
                        <div className="col-md-5 mt-4 ">
                            <h3 className="text-center mb-3">Schedule for <span>CoviHack'21</span></h3>
                            <hr/>
                            <div>
                                <div>
                                    <h5>28-05-2021 Friday</h5>
                                    <ul>
                                        <li>Inauguration ceremony from 03:00 PM onwards on Airmeet and YouTube live. </li>
                                        <li>Mentor session 1: Marking based on the idea presentation. </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>29-05-2021 Saturday</h5>
                                    <ul>
                                        <li>Mentor session 2: Initial prototype on Airmeet</li>
                                        <li>Judges evaluation: Marking based on idea presentation and Initial prototype.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>30-05-2021 Sunday </h5>
                                    <ul>
                                        <li>Mentor session 3: Completed prototype project on Airmeet </li>
                                        <li>Devfolio submission</li>
                                        <li>Judges evaluation: Final results on Streamyard and YouTube live.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CoviHack_Schedule
