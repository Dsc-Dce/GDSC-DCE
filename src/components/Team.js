import React, { Fragment } from 'react';
import './assets/css/Team.css';
import TeamCard from './TeamCard';
import SHRUTI from './assets/images/TEAM PHOTOS/Shruti_Sharma_Community_Lead.jpeg'
import TANMAY from './assets/images/TEAM PHOTOS/Tanmay Srivastava_Outreach Team Lead.jpg'
import TANIA from './assets/images/TEAM PHOTOS/Tania_WebDevelopmentLead.jpg'
import VAISHNAVI from './assets/images/TEAM PHOTOS/vaishnavi_sharma_content_team_lead.jpg'
import PREETI from './assets/images/TEAM PHOTOS/preeti_cloud.jpg'
import MANISH from './assets/images/TEAM PHOTOS/Manish_UI_UX(LEAD).jpg'
import JAI from './assets/images/TEAM PHOTOS/Jai Chaudhary_ Event Management Lead.jpg'
import ISHA from './assets/images/TEAM PHOTOS/Isha Dabas Event management lead.jpg'
import AKASH from './assets/images/TEAM PHOTOS/Akash_singh_cloud_lead.jpg'
import DIVYA from './assets/images/TEAM PHOTOS/DivyaSharma_AppDevelopmentLead.jpg';
import AUM from './assets/images/TEAM PHOTOS/Aum Singhal_ Web Design team .jpg';
import AKANKSHA from './assets/images/TEAM PHOTOS/Akanksha Parijat_Design Team Lead.jpg';
import AKANKSHA_DIXIT from './assets/images/TEAM PHOTOS/Akanksha Dixit Outreach Team Lead.jpg';
import SUKARN from './assets/images/TEAM PHOTOS/sukarn chowdhary_social_media_lead.jpg';
import AKRITI from './assets/images/TEAM PHOTOS/Akriti_Sinha_Social_media_lead.jpg';
import TANYA from './assets/images/TEAM PHOTOS/Tanya_Karn_Content_creation_lead.jpg';
import TANNU from './assets/images/TEAM PHOTOS/Tannu_Sharma_Design_TeamLead.jpeg';
const Team = () => {
    return (
        <Fragment>
            <div className="profile-area ">
                <div className="container">
                    <h1 id="heading">Our Core Team Members</h1>
                    <div className="row">
                        <TeamCard
                            Mname="Shruti Sharma"
                            Mdesc="Community lead"
                            Mphoto={SHRUTI}
                            link="https://www.linkedin.com/in/shruti-sharma-1b1b131a6/"
                        />
                        <TeamCard
                            Mname="Tanmay Srivastava"
                            Mdesc="Outreach Team Lead"
                            Mphoto={TANMAY}
                            link="https://www.linkedin.com/in/tanmay-srivastava-b74505219"
                        />
                        <TeamCard
                            Mname="Tania"
                            Mdesc="Web Development Lead"
                            Mphoto={TANIA}
                            link="https://www.linkedin.com/in/tania-chanana-64aa581b1/"
                        />
                        <TeamCard
                            Mname="Vaishnavi Sharma"
                            Mdesc="Content Team Lead"
                            Mphoto={VAISHNAVI}
                            link="https://www.linkedin.com/in/vaishnavi-sharma-21a02b203/"
                        />
                        <TeamCard
                            Mname="Preeti Ahuja"
                            Mdesc="Cloud Lead"
                            Mphoto={PREETI}
                            link="https://www.linkedin.com/in/preeti-ahuja-5753531a1/"
                        />
                        <TeamCard
                            Mname="Manish Kumar Singh"
                            Mdesc="UI/UX Lead"
                            Mphoto={MANISH}
                            link="https://www.linkedin.com/in/manish-kumar-singh-4995201a0"
                        />
                        <TeamCard
                            Mname="Jai Chaudhary"
                            Mdesc="Event Management Lead"
                            Mphoto={JAI}
                            link="https://www.linkedin.com/in/jai-chaudhary-094748210/"
                        />
                        <TeamCard
                            Mname="Isha Dabas"
                            Mdesc="Event Management Lead"
                            Mphoto={ISHA}
                            link="https://www.linkedin.com/in/isha-dabas-6b817a210"
                        />
                        <TeamCard
                            Mname="Akash Singh"
                            Mdesc="Cloud Lead"
                            Mphoto={AKASH}
                            link="https://www.linkedin.com/in/akash-singh-2802"
                        />

                        <TeamCard
                            Mname="Divya Sharma"
                            Mdesc="App development lead"
                            Mphoto={DIVYA}
                            link="https://www.linkedin.com/in/divya-sharma-1502"
                        />
                         <TeamCard
                            Mname="Aum Singhal"
                            Mdesc="Web Development Lead"
                            Mphoto={AUM}
                            link="https://www.linkedin.com/in/aum-s-895a86131/"
                        />
                         <TeamCard
                            Mname="Akanksha Parijat"
                            Mdesc="Design Team Lead"
                            Mphoto={AKANKSHA}
                            link="https://www.linkedin.com/in/akanksha-parijat-2a7a6620b"
                        />
                         <TeamCard
                            Mname="Akanksha Dixit"
                            Mdesc="Outreach team lead"
                            Mphoto={AKANKSHA_DIXIT}
                            link="https://www.linkedin.com/in/akanksha-dixit-11520a210"
                        />
                          <TeamCard
                            Mname="Sukarn Chowdhry"
                            Mdesc="Social Media Lead"
                            Mphoto={SUKARN}
                            link="https://www.linkedin.com/in/sukarn-chowdhry-371042132/"
                        />
                          <TeamCard
                            Mname="Akriti Sinha"
                            Mdesc="Social Media Lead"
                            Mphoto={AKRITI}
                            link="https://www.linkedin.com/in/akriti-sinha-1b934b196"
                        />
                          <TeamCard
                            Mname="Tanya karn"
                            Mdesc="Content Creation lead"
                            Mphoto={TANYA}
                            link="https://www.linkedin.com/in/tanya-karn-185438210"
                        />
                         <TeamCard
                            Mname="Tannu Sharma"
                            Mdesc="Design Team Lead"
                            Mphoto={TANNU}
                            link="https://www.linkedin.com/in/tannu-sharma-38ab521a9/"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team
