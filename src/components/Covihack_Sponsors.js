import {React,useEffect} from "react";
import "./assets/css/Covihack_Sponsors.css";
import img from "./assets/CoviHack Page assets/sponsor.jpg";
import devfolio from "./assets/CoviHack Page assets/Sponsors/devfolio.png";
import gfg from "./assets/CoviHack Page assets/Sponsors/gfg.png";
// import skillenza from "./assets/CoviHack Page assets/Sponsors/skillenza.png";
import wolfram from "./assets/CoviHack Page assets/Sponsors/wolfram.png";
import echoar from "./assets/CoviHack Page assets/Sponsors/echoAR.png";
import progate from "./assets/CoviHack Page assets/Sponsors/progate.png";
import replit from "./assets/CoviHack Page assets/Sponsors/replit.png";
import nostarchpress from "./assets/CoviHack Page assets/Sponsors/nostarchpress.png";
import taskade from "./assets/CoviHack Page assets/Sponsors/taskade.png";
import cncf from "./assets/CoviHack Page assets/Sponsors/cncf.png";
import jetbrains from "./assets/CoviHack Page assets/Sponsors/jetbrains.png";
import givemycert from "./assets/CoviHack Page assets/Sponsors/givemycert.jpeg";
import hoverrobotix from "./assets/CoviHack Page assets/Sponsors/hoverrobotix.png";
import AOS from "../../node_modules/aos";
import "aos/dist/aos.css";

const Covihack_Sponsors = () =>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="sponsors">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 sponsors-img" data-aos="fade-up">
                        <div className="row-g">

                            <div className="row">
                                <div className="col gold-title">Gold</div>
                            </div>

                            <div className="row spons-row">
                                <div className="col-5 spons-g" ><img src={devfolio} className="spons-row-img" /></div>
                                <div className="col-5 spons-g" ><img src={gfg} className="spons-row-img" /></div>
                            </div>

                        </div>

                        <div className="row-s">

                            <div className="row">
                                <div className="col silver-title">Silver</div>
                            </div>

                            <div className="row spons-row row-1">
                                {/* <div className="col-4 spons-s" ><img src={skillenza} className="spons-row-img" /></div> */}
                                <div className="col-4 spons-s" ><img src={wolfram} className="spons-row-img" /></div>
                                <div className="col-4 spons-s" ><img src={echoar} className="spons-row-img" /></div>
                            </div>

                            <div className="row spons-row row-2">
                                <div className="col-4 spons-s" ><img src={progate} className="spons-row-img" /></div>
                                <div className="col-4 spons-s" ><img src={replit} className="spons-row-img" /></div>
                                <div className="col-4 spons-s" ><img src={nostarchpress} className="spons-row-img" /></div>
                            </div>

                            <div className="row spons-row row-3">
                                <div className="col-4 spons-s" ><img src={taskade} className="spons-row-img" /></div>
                                <div className="col-4 spons-s" ><img src={cncf} className="spons-row-img" /></div>
                                <div className="col-4 spons-s" ><img src={jetbrains} className="spons-row-img" /></div>
                            </div>

                            <div className="row spons-row row-4">
                                <div className="col-6 spons-s" ><img src={givemycert} className="spons-row-img" /></div>
                                <div className="col-6 spons-s" ><img src={hoverrobotix} className="spons-row-img" /></div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-7" data-aos="fade-up"><img src={img} className="spons-img" /></div>
                </div>
            </div>
        </div>
    );
}

export default Covihack_Sponsors;