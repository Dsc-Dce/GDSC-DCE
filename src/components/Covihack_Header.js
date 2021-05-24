import {React,useEffect} from 'react';
import vid from './assets/CoviHack Page assets/tech.mp4';
import covi from './assets/CoviHack Page assets/covihack21.png';
import './assets/css/Covihack_header.css';
import AOS from "../../node_modules/aos";
import "aos/dist/aos.css";
const Covihack_Header=()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    
    return(
        <div className="coviheader">
             <video autoPlay loop muted playsInline style={{width:"100%",top:"0"}}>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
           
            <div className="coviheader-text">
                <h2>DSC DCE Presents</h2>
                <h1 data-aos="fade-up">COVIHACK'21</h1>
                <h3>Starting soon..</h3>
                {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSctJOn7QJnGbSpzTisjcs6s270Yut026KQUxYXD8TMYANIKMw/viewform">Register now!</a> */}
                {/* <a className="disabled">Registration Closed Now</a> */}
                <div className="resizeButton">
                <div className="apply-button" data-hackathon-slug="covihacks" data-button-theme="dark-inverted"></div>
                </div>
            </div>
            <img src={covi} alt="covihack"  className="covi-logo"/>
        </div>
    );
}
export default Covihack_Header;