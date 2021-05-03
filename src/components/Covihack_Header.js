import React from 'react';
import vid from './assets/CoviHack Page assets/tech.mp4';
import './assets/css/Covihack_header.css';

const Covihack_Header=()=>{
    return(
        <div className="coviheader">
             <video autoPlay loop muted playsInline style={{width:"100%",top:"0"}}>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
           
            <div className="coviheader-text">
                <h2>DSC DCE Presents</h2>
                <h1>COVIHACK'21</h1>
                <h3>Starting soon..</h3>
                <a href="#">Go to Devfolio</a>
            </div>
        </div>
    );
}
export default Covihack_Header;