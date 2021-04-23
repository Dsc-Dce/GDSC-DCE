import React, {useState, useRef, useEffect} from "react";
import "./assets/css/event.css";

function Event(){
    const [app_isOpen, app_setIsOpen] = useState(false);
    const [quiz_isOpen, quiz_setIsOpen] = useState(false);
    const [gcr_isOpen, gcr_setIsOpen] = useState(false);
    return(
        <div className="event-page">
            <h1 className="event-heading">Past Events</h1>

            <div className="cards">

                <div className="event-card" onClick={() => app_setIsOpen(!app_isOpen)}>
                    <div className="image"></div>
                    <span className="date">17th January, 2021</span>
                    <span className="title">App Development</span>
                    <span className="description">Learn to create an awesome app using Flutter</span>
                    {app_isOpen ? (
                        <div className="app-dev modal">
                            This model opened yay!!!
                        </div>
                    ) : null}
                </div>

                <div className="event-card" onClick={() => quiz_setIsOpen(!quiz_isOpen)}>
                    <div className="image"></div>
                    <span className="date">8th January, 2021</span>
                    <span className="title">Quiz</span>
                    <span className="description">Test your knowledge with this QUIZ!!!</span>
                    {quiz_isOpen ? (
                        <div className="quiz modal">
                            This model opened yay!!!
                        </div>
                    ) : null}
                </div>        
                
                <div className="event-card" onClick={() => gcr_setIsOpen(!gcr_isOpen)}>
                    <div className="image"></div>
                    <span className="date">8th January, 2021</span>
                    <span className="title">GCR Program</span>
                    <span className="description">Get a hands on experience on Google Cloud</span>
                    {gcr_isOpen ? (
                        <div className="gcr modal">
                            This model opened yay!!!
                        </div>
                    ) : null}
                </div>

            </div>
        </div>
    );
}

export default Event;