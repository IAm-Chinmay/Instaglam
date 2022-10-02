import React from "react";

import PostCards from "./PostCardsItem/PostCards";
import './Posts.css';


const Posts = () =>{
    return (
        <>
        <div className="main-page">
        <PostCards/>
        <div className="suggestUsers">
            <h3>Sugested Users :</h3>
            <ul>
                <li>
            <div className="suggestUserInfo">
                <div className="suggestUserImg">      
                    <img src="https://images3.alphacoders.com/114/1149777.jpg" /> 
                    <h4>Chinu_8301</h4>
                </div>
            </div>
            </li>
            <li>
            <div className="suggestUserInfo">
                <div className="suggestUserImg">      
                    <img src="https://images.wallpaperscraft.com/image/single/man_profile_silhouette_circle_118321_300x188.jpg" /> 
                    <h4>IamGhost</h4>
                </div>
            </div>
            </li>
            <li>
            <div className="suggestUserInfo">
                <div className="suggestUserImg">      
                    <img src="https://i.pinimg.com/280x280_RS/af/9d/d5/af9dd5f2d044b2f9c3c1521f8973c5a8.jpg" /> 
                    <h4>chinumai</h4>
                </div>
            </div>
            </li>
            <li>
            <div className="suggestUserInfo">
                <div className="suggestUserImg">      
                    <img src="https://wallpaperaccess.com/full/2121741.jpg" /> 
                    <h4>Patrik :)</h4>
                </div>
            </div>
            </li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Posts;