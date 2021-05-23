import React, { Fragment } from 'react'
import first from './assets/CoviHack Page assets/prizes/first.png'
const MPrize_card = (props) => {
    return (
        <Fragment>
            <div className="col-lg-12 col-md-12 my-2">
                <div className="onecard">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-1">
                            <h1  className="prize-tag">{props.tag}</h1>
                            </div>
                            <div className="col-md-11">
                                <div className="two">
                                    <div className="card">
                                        <div className="prize-list mt-5">
                                            {props.children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 py-3">
                                <img src={props.im} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MPrize_card
