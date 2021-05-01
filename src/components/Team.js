import React, { Fragment } from 'react';
import './assets/css/Team.css';
import TeamCard from './TeamCard';
import SEJAL from './assets/images/TEAM PHOTOS/SEJAL KHANNA_ORGANISER + DSC LEAD.png'
import ANKIT from './assets/images/TEAM PHOTOS/AD_Community Manager.jpg'
import RAJAT from './assets/images/TEAM PHOTOS/RAJAT DASH_Website_development-2.jpeg'
import AMAN from './assets/images/TEAM PHOTOS/Aman Yadav design team lead, airmeet wf, social media.jpg'
import AYUSH from './assets/images/TEAM PHOTOS/AYUSH_GUPTA_AIRMEET_SPONSOR.jpg'
import DIVYANSHI from './assets/images/TEAM PHOTOS/DIVYANSHI OBEROI_Content_Social_Media.jpg'
import RITVIK from './assets/images/TEAM PHOTOS/RITVIK BHADOLA_DISCORD MANAGEMENT.JPG'
import RIYA from './assets/images/TEAM PHOTOS/RIYA VERMA_Content_Social_Media.jpg'
import SAHIL from './assets/images/TEAM PHOTOS/SAHILSANDHU_DEVFOLIO.jpg'

const Team = () => {
    return (
        <Fragment>
            <div className="profile-area ">
                <div className="container">
                    <h1 id="heading">Our Core Team Members</h1>
                    <div className="row">
                        <TeamCard
                            Mname="Sejal Khanna"
                            Mdesc="DSC lead"
                            Mphoto={SEJAL}
                        />
                        <TeamCard
                            Mname="Rajat Dash"
                            Mdesc="Website Development"
                            Mphoto={RAJAT}
                        />
                        <TeamCard
                            Mname="Ankit Dhawan"
                            Mdesc="Community Management"
                            Mphoto={ANKIT}
                        />
                        <TeamCard
                            Mname="Aman Yadav"
                            Mdesc="Design Team lead"
                            Mphoto={AMAN}
                        />
                        <TeamCard
                            Mname="Ayush Gupta"
                            Mdesc="Design Team lead"
                            Mphoto={AYUSH}
                        />
                        <TeamCard
                            Mname="Diyanshi Oberoi"
                            Mdesc="Content and Social Media"
                            Mphoto={DIVYANSHI}
                        />
                        <TeamCard
                            Mname="Ritvik Bhadola"
                            Mdesc="Discord Management"
                            Mphoto={RITVIK}
                        />
                        <TeamCard
                            Mname="Riya Verma"
                            Mdesc="Content and Social Media"
                            Mphoto={RIYA}
                        />
                        <TeamCard
                            Mname="Sahil Sandhu"
                            Mdesc="Devfolio"
                            Mphoto={SAHIL}
                        />

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team
