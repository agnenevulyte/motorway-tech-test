import React from "react";
import motorwayLogo from "../assets/Motorway_Logo_Black_RGB.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <a href="https://motorway.co.uk/" target="_blank" rel="noreferrer">
        <img src={motorwayLogo} alt="Motorway Logo" className="header-logo" />
      </a>
      <div className="header-buttons">
        {location.pathname === "/" ? (
          <Link to="/form">
            <button>Contact Us</button>
          </Link>
        ) : (
          <Link to="/">
            <button>
              <FontAwesomeIcon icon={faArrowLeft} className="back-icon" /> Back
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
