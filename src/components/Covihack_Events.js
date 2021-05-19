import React from 'react';
import first_event from './assets/CoviHack Page assets/28.jpeg';
import sec_event from './assets/CoviHack Page assets/29.jpeg';
import './assets/css/CoviHack_Schedule.css';
import AOS from "../../node_modules/aos";
import "aos/dist/aos.css";
const Covihack_Event=()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="Covi-event container">
            <h3>Register for the upcoming speaker sessions</h3>
            <div className="row" data-aos="fade-up">
            <div className="col-lg-5  mt-4">
                <div className="event-card" id="event-card" >
                  <img src={first_event} alt="" style={{width:"100%"}}/>
                  <a href="https://dsc.community.dev/e/mwefyt" id="link">Register for the event</a>
                </div>
            </div>
            <div className="col-lg-5  mt-4">
                <div className="event-card" id="event-card">
                <img src={sec_event} alt="" style={{width:"100%"}}/>
                <a href="https://dsc.community.dev/e/mbr2ks"  id="link">Register for the event</a>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Covihack_Event;