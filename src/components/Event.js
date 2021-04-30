import React, {useState, useRef, useEffect} from "react";
import "./assets/css/event.css";
import Card from "./Cardui";
import Modals from "./Modalui";
import techimg from "./assets/images/tech1.jpg";

function Event(){
    const [event1_isOpen, event1_setIsOpen] = useState(false);
    return(
        <div className="event-page">
            <h1 className="event-heading">Past Events</h1>

            <div className="cards">

                <Card onClick={() => event1_setIsOpen(!event1_isOpen)} className="event-card" imgsrc={techimg} title="Event 1" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />
                {event1_isOpen ? (
                    <div>
                        <Modals title="Event 1" body="This is the body of the modal of event 1" />
                    </div>
                ) : null}

                <Card className="event-card" imgsrc={techimg} title="Event 2" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />
                
                <Card className="event-card" imgsrc={techimg} title="Event 3" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 4" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 5" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 6" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 7" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 8" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

                <Card className="event-card" imgsrc={techimg} title="Event 9" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat fugit quis sint consectetur fugiat distinctio totam assumenda corrupti mollitia." />

            </div>
        </div>
    );
}

{/* <div className="event-card" onClick={() => app_setIsOpen(!app_isOpen)}>
                    <div className="image"></div>
                    <span className="date">17th January, 2021</span>
                    <span className="title">App Development</span>
                    <span className="description">Learn to create an awesome app using Flutter</span>
                    {app_isOpen ? (
                        <div className="app-dev modal">
                            This model opened yay!!!
                        </div>
                    ) : null}
                </div> */}

export default Event;