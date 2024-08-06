import React from 'react'

import logo from "../images/Niki-Logo.jpg"
import './Navbar.css'
export default function Navbar() {
  return (
    <div className = "nav">
        <div className="navbar">
            <div className="logo"><img src={logo} alt="" /></div>

            <div className="nav-links">
                <ul>
                    <li className="link">
                        Menu
                    </li>
                    <li className="link">
                        Location
                    </li>
                    <li className="link">
                        About
                    </li>
                    <li className="link">
                        Contact
                    </li>

                </ul>
            </div>

            <div className="button"><button>Login</button></div>
        </div>
      
    </div>
  )
}
