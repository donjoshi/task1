import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import menu1 from "./menu1.png";



export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="position">
        <div>SIGN IN</div>
        <div>
            <img src={menu1} alt="no image" />
        </div>
      </div>
    </div>
  );
}