import React, { Fragment } from 'react';
import './assets/css/Team.css';
import TeamCard from './TeamCard';
// import SEJAL from './assets/images/TEAM PHOTOS/SEJAL KHANNA_ORGANISER + DSC LEAD.png'
import ANKIT from './assets/images/TEAM PHOTOS/AD_Community Manager.jpg'
import RAJAT from './assets/images/TEAM PHOTOS/RAJAT DASH_Website_development-2.jpeg'
import AMAN from './assets/images/TEAM PHOTOS/Aman Yadav design team lead, airmeet wf, social media.jpg'
import AYUSH from './assets/images/TEAM PHOTOS/AYUSH_GUPTA_AIRMEET_SPONSOR.jpg'
import DIVYANSHI from './assets/images/TEAM PHOTOS/DIVYANSHI OBEROI_Content_Social_Media.jpg'
import RITVIK from './assets/images/TEAM PHOTOS/RITVIK BHADOLA_DISCORD MANAGEMENT.JPG'
import RIYA from './assets/images/TEAM PHOTOS/RIYA VERMA_Content_Social_Media.jpg'
import SAHIL from './assets/images/TEAM PHOTOS/SAHILSANDHU_DEVFOLIO.jpg'
import SHRUTI from './assets/images/TEAM PHOTOS/SHRUTI_SHARMA_WebDev_Marketing.jpeg';
import PRERNA from './assets/images/TEAM PHOTOS/Prerna_Sponsors_Devfolio_Marketing.png';
import SHIVAM from './assets/images/TEAM PHOTOS/SHIVAM MONGA_Design & UI_UX Lead.jpg';
const Team = () => {
    return (
        <Fragment>
            <div className="profile-area ">
                <div className="container">
                    <h1 id="heading">Our Core Team Members</h1>
                    <div className="row">
//                         <TeamCard
//                             Mname="Sejal Khanna"
//                             Mdesc="DSC lead"
//                             Mphoto={SEJAL}
//                             link="https://www.linkedin.com/in/sejal-khanna-ab10b1171"
//                         />
                        <TeamCard
                            Mname="Rajat Dash"
                            Mdesc="Web Development"
                            Mphoto={RAJAT}
                            link="https://www.linkedin.com/in/rajatdash"
                        />
                        <TeamCard
                            Mname="Ankit Dhawan"
                            Mdesc=" Mobile App Development"
                            Mphoto={ANKIT}
                            link="https://www.linkedin.com/in/ankit-dhawan-17b552161/"
                        />
                        <TeamCard
                            Mname="Aman Yadav"
                            Mdesc="Design Team lead"
                            Mphoto={AMAN}
                            link="https://www.linkedin.com/in/aman-yadav00123/"
                        />
                        <TeamCard
                            Mname="Ayush Gupta"
                            Mdesc="Android Development"
                            Mphoto={AYUSH}
                            link=" https://www.linkedin.com/in/ayush-gupta-401ab3173/"
                        />
                        <TeamCard
                            Mname="Shruti Sharma"
                            Mdesc="Web Development"
                            Mphoto={SHRUTI}
                            link="https://www.linkedin.com/in/shruti-sharma-1b1b131a6"
                        />
                        <TeamCard
                            Mname="Divyanshi Oberoi"
                            Mdesc="Content and Social Media"
                            Mphoto={DIVYANSHI}
                            link="https://www.linkedin.com/in/divyanshi-oberoi-a006331aa"
                        />
                        <TeamCard
                            Mname="Ritvik Bhadola"
                            Mdesc="Ethical Hacking"
                            Mphoto={RITVIK}
                            link="#"
                        />
                        <TeamCard
                            Mname="Riya Verma"
                            Mdesc="Content and Social Media"
                            Mphoto={RIYA}
                            link="http://linkedin.com/in/riya-verma-7495a91aa"
                        />

                        <TeamCard
                            Mname="Sahil Sandhu"
                            Mdesc="ML/AI lead"
                            Mphoto={SAHIL}
                            link="https://www.linkedin.com/in/the-sahil-sandhu/"
                        />
                         <TeamCard
                            Mname="Shivam Monga"
                            Mdesc="Design and UI/UX Lead"
                            Mphoto={SHIVAM}
                            link="https://www.linkedin.com/in/theshivammonga/"
                        />
                         <TeamCard
                            Mname="Prerna Mishra"
                            Mdesc="ML/AI"
                            Mphoto={PRERNA}
                            link="https://www.linkedin.com/in/m-prerna"
                        />
                        {/* <TeamCard
                        Mname="Saarthak Harit"
                        Mdesc="Ethical Hacking"
                        Mphoto=""
                        link=""
                        /> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team
