import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';



const Navbar = () => {
    
    return (
        <nav id="NavNav">
            <h1>Menu</h1>
            <div id="links">
            <a href="/">Home</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/Game">Memory</a>
            <a href="/art">Art</a>
            <a href="/VR">VR Experinces</a>
            </div>
        </nav>
    )
}
export default Navbar;