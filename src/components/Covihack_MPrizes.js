import React, { Fragment } from 'react'
import './assets/css/CovihackMPrizes.css'
import MPrize_card from './MPrize_card'
import one from './assets/CoviHack Page assets/prizes/one.jpeg'
import two from './assets/CoviHack Page assets/prizes/two.jpeg'

const Covihack_MPrizes = () => {
    return (
        <Fragment>
            <div className="mprizes my-3">
                <div className="container">
                    <h1 className="text-center">PRIZES</h1>
                    <div className="row">
                        <MPrize_card im={one} tag="1st">
                            <ul>
                                <li><span>Goodies from Devfolio</span> - (T-shirts & stickers) worth a million smiles</li>
                                <li><span>Taskade</span> - Lifetime upgrades for winners
                                    - 1-Year free upgrades</li>
                                <li><span>echoAR</span> - premium tier services as a free perk and resource to all participants</li>
                                <li><span>CNCF</span> - offer tickets to their Kubernetes Community Days Bengaluru event</li>
                                <li><span>REPLIT</span> - a free month of hacker plan for using replit services</li>
                                <li><span>Geeks For Geeks</span> - Access to premium courses worth 1200/-</li>
                                <li><span>Geeks For Geek</span>s -  300/- INR vouchers</li>
                                <li><span>NoStrach</span> - $20 ebook vouchers</li>
                                <li><span>NoStrach</span> - 20% discount code</li>
                                <li><span>JetBrains</span> - free access to all JetBrains professional development tools.</li>
                                <li><span>HoverRobotix</span> - Gift Voucher for Winning Team worth 10000/- each</li>
                            </ul>
                        </MPrize_card>
                   
                        <MPrize_card im={one} tag="2nd">

                            <ul>
                                <li><span>Goodies from Devfolio</span> - (T-shirts & stickers) worth a million smiles</li>
                                <li><span>Taskade</span> - Lifetime upgrades for winners
                                    - 1-Year free upgrades</li>
                                <li><span>echoAR</span> - premium tier services as a free perk and resource to all participants</li>
                                <li><span>CNCF</span> - offer tickets to their Kubernetes Community Days Bengaluru event</li>
                                <li><span>REPLIT</span> - a free month of hacker plan for using replit services</li>
                                <li><span>Geeks For Geeks</span> - Access to premium courses worth 1200/-</li>
                                <li><span>Geeks For Geek</span>s -  300/- INR vouchers</li>
                                <li><span>NoStrach</span> - 20% discount code</li>
                                <li><span>JetBrains</span> - free access to all JetBrains professional development tools.</li>
                            </ul>
                        </MPrize_card>

                        <MPrize_card im={one} tag="3rd">

                        <ul>
                                <li><span>Goodies from Devfolio</span> - (T-shirts & stickers) worth a million smiles</li>
                                <li><span>Taskade</span> - Lifetime upgrades for winners
                                    - 1-Year free upgrades</li>
                                <li><span>echoAR</span> - premium tier services as a free perk and resource to all participants</li>
                                <li><span>CNCF</span> - offer tickets to their Kubernetes Community Days Bengaluru event</li>
                                <li><span>REPLIT</span> - a free month of hacker plan for using replit services</li>
                                <li><span>Geeks For Geeks</span> - Access to premium courses worth 1200/-</li>
                                <li><span>Geeks For Geek</span>s -  300/- INR vouchers</li>
                                <li><span>NoStrach</span> - 20% discount code</li>
                                <li><span>JetBrains</span> - free access to all JetBrains professional development tools.</li>
                            </ul>
                        </MPrize_card>
                        <div className="col-lg-12 col-md-12 my-2">
                    <div className="onecard">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-11">
                                <div className="two">
                                    <div className="card">
                                        <h1 className="participation-tag">All Participants</h1>
                                        <div className="prize-list mt-5">
                                        <ul>
                                <li><span>Give my certificates</span></li>
                                <li><span>top 50 - CFC</span></li>
                                <li><span>Wolfram</span> - Access for 30 days (Wolfram)</li>
                                <li><span>Qoom</span> - 3 month starter pack FOR ALL</li>
                                <li><span>Taskade</span> -  1  year upgrades for everyone</li>
                                <li><span>echoAR</span> - Premium Tier Services</li>
                                <li><span>JetBrains</span> - Free Access to Jetbrain Proffesional Development tools</li>
                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <img src={two} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Covihack_MPrizes
