import React, { Fragment } from 'react'
import './assets/css/Covihack_Prizes.css'
import PrizeCard from './PrizeCard';

const Covihack_Prizes = (props) => {
    return (
        <Fragment>
            <div id="prizes">
                <div className="prize-area">
                    <div className="container">
                        <h1 className="text-center">Prizes</h1>
                        <div className="row">
                            <PrizeCard/>
                            <PrizeCard/>
                            <PrizeCard/>
                            <PrizeCard/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Covihack_Prizes
