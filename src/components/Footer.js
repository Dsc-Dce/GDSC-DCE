import React from 'react';
import './assets/css/footer.css';
import footerlogo from './assets/images/DSC Dark.png';
import insta from './assets/images/Instagram.png';
import fb from './assets/images/Facebook.png';
import tw from './assets/images/Twitter.png';
import gh from './assets/images/Github.png';

const Footer=()=>{
    return(
        <footer>
            <div className="d-flex">
                <div className="footer-left">
                    <img src={footerlogo} alt="dscLogo" />
                    <h6>Powered by Google Developers</h6>
                </div>
                <div className="footer-right">
                    <div className="footer-icons">
                        <a href="https://www.instagram.com/dsc.dce/"><img src={insta} alt="insta" /></a>
                        <a hre="https://github.com/Dsc-Dce"><img src={gh} alt="github"/></a>
                        <a hre="https://twitter.com/ClubDce"><img src={tw} alt="twitter"/></a>
                        <a href="https://www.facebook.com/dsc.dce.9"><img src={fb} alt="facebook" /></a>
                    </div>
                    <h6>Catch Us On</h6>
                </div>
            </div>
        </footer>
    );
}
export default Footer;