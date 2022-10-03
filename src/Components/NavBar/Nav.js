import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () =>{
    return (
        <>
        <header>
            <nav className="nav ">
    <div className="nav-main-container">
    <Link to={'/'} style={{all : 'unset' , cursor : 'pointer'}}>
        <div className="logo-css">
       <h3>INSTAGLAM</h3>
        </div></Link>
        <div className="nav-links">
        <ul>
            <div className="li-css">
            <li><Link style={{all: 'unset'}} to={'/profile'}><button>
                <div className="main_profile">
                    <img src="https://images3.alphacoders.com/114/1149777.jpg" alt="profile_img" />
                </div>
                </button></Link></li>
            <li><Link style={{all: 'unset'}} to={'/post'}><button><i class="fa-sharp fa-solid fa-circle-plus"></i></button></Link></li>
            <li><Link style={{all: 'unset'}} to={'/'}><button><i class="fa-sharp fa-solid fa-house"></i></button></Link></li>
            </div>
        </ul>
        </div>
        </div>
        </nav>
        </header>
        </>
    )
}

export default Nav; 