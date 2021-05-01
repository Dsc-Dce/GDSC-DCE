import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/cardui.css";


const Card = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} className="card-img-top" alt="img"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.desc}</p>
            </div>
        </div>
    );
}

export default Card;