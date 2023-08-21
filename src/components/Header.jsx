import React from 'react'
import "./css/Header.css"
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className="mainContainer">
        <div  className="header">


        <NavLink  className="siteNavLink" to={"/"}><img  src="./images/svg/logo.svg" alt="logo" /></NavLink>

        <nav >
            <NavLink className="siteNavLink" to={"/"}>Home</NavLink>
            <NavLink className="siteNavLink" to={"headphones"}>Headphones</NavLink>
            <NavLink className="siteNavLink" to={"speakers"}>SPEAKERS</NavLink>
            <NavLink  className="siteNavLink"to={"earphones"}>EARPHONES</NavLink>
        </nav>

<img src="./images/svg/shop.svg" alt="shop" />
        </div>
    </div>
  )
}

export default Header