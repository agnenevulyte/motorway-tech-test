import React from "react";
import motorwayLogo from "../assets/Motorway_Logo_Black_RGB.png";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <a href="https://motorway.co.uk/" target="_blank" rel="noreferrer">
        <img src={motorwayLogo} alt="Motorway Logo" className="header-logo" />
      </a>
      <div className="contact-us-button">
        <Link to="/form">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};
