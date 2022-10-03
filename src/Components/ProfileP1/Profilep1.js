import React from "react";

import Gallery from "./ProfileGallery/Gallery";
import './Profilep1.css';

const ProfilePage = () =>{
    return(
        <div className="main-profile-container">
            <div className="upperbody-profile">
                <div className="main-profile-img">
                    <img src="https://images3.alphacoders.com/114/1149777.jpg" alt="main-profile-img" />
                </div>
                <div className="submain-profile-sec">
                    <div className="main-profile-name">
                        <h1>Chinu_8301</h1>
                    </div>
                    <div className="main-profile-subtitle">
                        <p>
                        Diversity isn't a recruitment metric — it's an ingredient for success. At [company], we thrive on the unique backgrounds, experiences, and perspectives of our people.
                        </p>
                    </div>
                </div>
         
            </div>
     
            <div className="lowerbody-profile">
                <hr/>
                <h4>POSTS</h4>
                <div className="user-images-gallery">
                    <Gallery/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage ;