import React, { Fragment } from 'react'
import tech from './assets/images/tech1.jpg';
import pr from './assets/CoviHack Page assets/prizes/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1934610.jpeg'

const PrizeCard = (props) => {
    return (
        <Fragment>
             <div className="col-lg-12 col-md-6 mt-4">
                <div className="one">
                    <div className="card">
                        <div className="im1"><img src={tech} alt="im" /></div>
                        <div className="im2"><img src={pr} alt="im2" /></div>
                        <div className="main-text">
                            <h2>heading</h2>
                            <p>desc</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PrizeCard
