import React from 'react';
import './navbar.css'
import { BrowserRouter, Route, Link } from "react-router-dom";


function Navbar() {
    return (

        <nav>
            <ul class = "topnav">
                <li>
                    <Link to = "/pages/home.js" class="active">Home</Link>
                </li>
                <li>
                    <Link to = "/pages/about.js">About</Link>
                </li>
                <li>
                    <Link to = "/">Blog</Link>
                </li>
                <li>
                    <Link to = "/">Contact</Link>
                </li>
            </ul>
        </nav>




    )
}



export default Navbar