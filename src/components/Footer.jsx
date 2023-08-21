import React from 'react'
import './css/Footer.css'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
        <div className="mainContainer">
        <div  className="footer">
<span className='page-display'></span>

      <div className="web__navigation">
      <NavLink className="siteNavLink"  to={"/"}><img  src="./images/svg/logo.svg" alt="logo" /></NavLink>

<nav >
            <NavLink className="siteNavLink"  to={"/"}>Home</NavLink>
            <NavLink className="siteNavLink"  to={"headphones"}>headphones</NavLink>
            <NavLink className="siteNavLink"  to={"speakers"}>SPEAKERS</NavLink>
            <NavLink className="siteNavLink"  to={"earphones"}>EARPHONES</NavLink>
</nav>
      </div>

<div className="main-text__wrep">
<div className="footer-text">
    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

    <p>Copyright 2021. All Rights Reserved</p>
</div>

<div className="social-media__wrapper">
     <a href="https://twitter.com"><img src="./images/svg/facebook.svg" alt="facebook" /></a>
     <a href="https://twitter.com"><img src="./images/svg/twiter.svg" alt="twiter" /></a>
     <a href="https://www.instagram.com/"><img src="./images/svg/instagram.svg" alt="instagram" /></a>
</div>
</div>
        </div>
    </div>
    </div>
  )
}

export default Footer