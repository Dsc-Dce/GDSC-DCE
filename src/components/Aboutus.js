import React, { useEffect,useState } from "react";
import AOS from "../../node_modules/aos";
import vid from './assets/images/Web Video.MP4';
import img from './assets/images/GDSC.png';
import about from './assets/images/about-svg.png';
import logo from './assets/images/aboutdsclogo.png';
import './assets/css/aboutus.css';
import comp from './assets/images/computer.png';
import ai from './assets/images/chip.png';
import app from './assets/images/mobile-phone.png';
import ui from './assets/images/ui.png';
import webd from './assets/images/code.png';
import cp from './assets/images/coding.png';
import lightjoin from './assets/images/handshake-light.mp4';
import darkjoin from  './assets/images/handshake-dark.mp4';
import lightteam from './assets/images/teamlight.mp4';
import darkteam from './assets/images/teamdark.mp4';
import "aos/dist/aos.css";
const Aboutus=({theme})=>{
    const [handshake,setHandshake]=useState('');
    const [team,setTeam]=useState('');
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
      useEffect(()=>{
          console.log(theme)
        if(theme==='light'){
            setHandshake(lightjoin)
            setTeam(lightteam)
        }
        else{
            setHandshake(darkjoin)
            setTeam(darkteam)
        }
      },[theme,handshake,team])
    
    return(
        <div className="aboutus">
            <div className="header">
            <video autoPlay loop muted playsInline style={{width:"100%",top:"0",opacity:"0.6"}} id="headervid">
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img src={img} alt="logo" className="gdsclogo" />
            </div>
            <div className="secondheader d-flex" >
            <video autoPlay loop muted playsInline data-aos="fade-up" style={{height:"284px"}}>
                <source src={team} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
                {/* <img src={about} alt="illustration" /> */}
                <div className="text">
                    <img src={logo} alt="" data-aos="fade-up"/>
                    <h4>
                    The<span className="bold"> Developer Student Clubs (DSC)</span> program is a grassroots channel through which we provide development skills for students, towards employability. In addition to workshops, we also provide an opportunity for students to apply their newly gained skills to develop solutions for local organizations and then provide visibility via showcases.
                    </h4>
                    <a href="#" data-aos="fade-up">Register for CoViHaCk'21</a>
                </div>
            </div>
            <div className="whydsc d-flex">
                <div className="text">
                    <h2 data-aos="fade-up">Why DSC?</h2>
                    <h6>
                    <span className="bold">Developer Students Club</span> is a globally recognized student body that helps students to have the opportunity to not only learn development skills, but also acts as a medium to apply them to real-life problems by finding solutions, and then showcasing their work within their communities. By developing solutions for local businesses/organizations, talented college students can now help the local community and have hands-on experience for building real-world applications.
                    </h6>
                </div>
                <div className="domains">
                    <div className="row">
                    <div className="col-md-4">
                        <div>
                        <img src={comp} alt="comp" />
                        <h6>Cloud Computing</h6>
                        </div>
                     
                    </div>
                    <div className="col-md-4">
                    <div>
                        <img src={ai} alt="comp" />
                        <h6>Artificial Intelligence</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div>
                        <img src={app} alt="comp" />
                        <h6>App Development</h6>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                    <div>
                        <img src={ui} alt="comp" />
                        <h6>UX Design</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div>
                        <img src={webd} alt="comp" />
                        <h6>Web Development</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div>
                        <img src={cp} alt="comp" style={{height:"90px",marginTop:"-5px",marginBottom:"1px"}}/>
                        <h6>Competitive Programming</h6>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            <div className="joinus d-flex ">
            <video autoPlay loop muted playsInline data-aos="fade-up">
                <source src={handshake} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
                {/* <img src={join} alt="join us" /> */}
                <div className="text">
                    <h3 data-aos="fade-up">Join us!</h3>
                    <h6>Stay on the same page, be focused, and organized to learn more quickly by bringing all of communication, resources, and event updates into one place.</h6>
                    <div className="social-handles" data-aos="fade-up">
                        <a href="#" className="discord">Discord</a>
                        <a href="#" className="wp">Whatsapp</a>
                    </div>
                </div>
            </div>
            <div className="upcomingevents">
                <h3>Upcoming Events</h3>
                <div className="event-cards">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="covihack">
                                <h3 data-aos="fade-up">CoViHaCk'21</h3>
                                <div className="duration">
                                    <h6><span className="title">Time</span>: 09:00PM onwards</h6>
                                    <h6><span className="title">Date</span>: 28-30th May 2021</h6>
                                    <h6><span className="title">Platform</span>: Airmeet</h6>
                                </div>
                                <hr/>
                                <h5>Know more</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="buzzquiz">
                                <h3 data-aos="fade-up">BuzzQuizz</h3>
                                <div className="duration">
                                    <h6><span className="title">Time</span>: 09:00PM onwards</h6>
                                    <h6><span className="title">Date</span>: 28-30th May 2021</h6>
                                    <h6><span className="title">Platform</span>: Airmeet</h6>
                                </div>
                                <hr/>
                                <h5>Know more</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="appdev">
                                <h3 data-aos="fade-up">App-Dev</h3>
                                <div className="duration">
                                    <h6><span className="title">Time</span>: 09:00PM onwards</h6>
                                    <h6><span className="title">Date</span>: 28-30th May 2021</h6>
                                    <h6><span className="title">Platform</span>: Airmeet</h6>
                                </div>
                                <hr/>
                                <h5>Know more</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="uiux">
                                <h3 data-aos="fade-up">Ui/Ux Design</h3>
                                <div className="duration">
                                    <h6><span className="title">Time</span>: 09:00PM onwards</h6>
                                    <h6><span className="title">Date</span>: 28-30th May 2021</h6>
                                    <h6><span className="title">Platform</span>: Airmeet</h6>
                                </div>
                                <hr/>
                                <h5>Know more</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Aboutus;