import {React,useEffect} from "react";
import "./assets/css/Covihack_Tracks.css";
import blockchain from "./assets/CoviHack Page assets/Vectors/blockchain.png";
import ai from "./assets/CoviHack Page assets/Vectors/artificial-intelligence.png";
import vr from "./assets/CoviHack Page assets/Vectors/virtual-reality.png";
import ft from "./assets/CoviHack Page assets/Vectors/bars.png";
import sg from "./assets/CoviHack Page assets/Vectors/love.png";
import iot from "./assets/CoviHack Page assets/Vectors/internet-of-things.png";
import hc from "./assets/CoviHack Page assets/Vectors/insurance.png";
import service from "./assets/CoviHack Page assets/Vectors/service.png";
import AOS from "../../node_modules/aos";
import "aos/dist/aos.css";

const Covihack_Tracks = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="tracks">
            <div className="container">
                <div className="row tracks-head"><h2>Tracks</h2></div>
                <div className="row">
                    <div className="col-5 track-title">
                        <div className="blockchain d-flex" style={{marginTop:'20px'}}>
                            <img src={blockchain} /> <b>Blockchain</b>
                        </div>
                        <div className="ai d-flex" style={{marginTop:'8px'}}>
                            <img src={ai} /> <b>Artificial Intelligence</b>
                        </div>
                        <div className="ar-vr d-flex" style={{marginTop:'6px'}}>
                            <img src={vr} /> <b>AR/VR</b>
                        </div>
                        <div className="financial-tech d-flex" style={{marginTop:'0px'}}>
                            <img src={ft} /> <b>Financial Technology</b>
                        </div>
                        <div className="social-good d-flex" style={{marginTop:'2px'}}>
                            <img src={sg}  /> <b>Social Good</b>
                        </div>
                        <div className="iot d-flex" style={{marginTop:'20px'}}>
                            <img src={iot}/> <b>Internet of Things</b>
                        </div>
                        <div className="healthcare d-flex" style={{marginTop:'18px'}}>
                            <img src={hc} /> <b>Healthcare</b>
                        </div>
                        <div className="mobility d-flex" style={{marginTop:'0px'}}>
                            <img src={service} /> <b>Mobility</b>
                        </div>
                    </div>

                    <div className="col-7 track-title-desc">
                        <div className="row blockchain" >
                            Today's most exciting use cases for blockchain technology extend far beyond payments and digital currency. With the advent of "smart contracts" and turning-complete frameworks, blockchain technology has evolved far beyond just bitcoins. It is time to join the Web 3.0 revolution!
                        </div>
                        <div className="row ai" >
                            From bots to personal assistants, and shopping automation, what the future holds for artificial intelligence can be described for sure with at least one word; Exciting. Our machines and devices are getting faster, more efficient, and slowly learning to do things on their own.
                        </div>
                        <div className="row ar-vr" >
                            VR and AR is the extension of our minds and is meant for those interested in building immersive, engaging experiences for real industry applications. From fashion and sports to data visualization and engineering to education and healthcare, every sector will be impacted by the rise of VR & AR.
                        </div>
                        <div className="row financial-tech">
                            The financial services industry is facing a wave of digital disruption that is starting to reshape the sector. This industry is currently the second-biggest target for disruption, after health care.
                        </div>
                        <div className="row social-good">
                            Encourage people to change the world for the better. This could mean hacking on politics, helping a non-profit, or making it easier for others to volunteer their time.
                        </div>
                        <div className="row iot" >
                            A world of devices connected by the internet opens up opportunities for us that were previously unthinkable. Innovative apps can be built that allow devices to share data and take intelligent decisions.
                        </div>
                        <div className="row healthcare">
                            None of us need to search far for a friend or family member impacted by sickness or injury. At our most vulnerable moments, we are confronted with a healthcare system woefully incapable of meeting the current demands. We are calling on all hackers and sponsors to innovate for a healthier future.
                        </div>
                        <div className="row mobility">
                            From self-driving cars to smart cities software and sensor technology are changing the way we move around. Hate traffic? We too. Hate pollution? Same. Hate finding a parking spot? Yep. Join the Future Mobility track and solve these problems.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Covihack_Tracks;