import React from "react";
import LazyLoad from "react-lazy-load";
import motorwayLogo from "../assets/motorway-logo.png";
import "./ImageCard.css";

export const ImageCard = ({ img, openModal }) => {
  return (
    <div className="image-container">
      <div className="user-info">
        <div className="image-container-header">
          <div className="user-details">
            <img
              src={`${img.user.profile_image}.webp`}
              alt="User Icon"
              className="user-icon"
              loading="lazy"
            />
            <p className="user-name">{img.user.username}</p>
          </div>
          <a href="https://motorway.co.uk/" target="_blank" rel="noreferrer">
            <img src={motorwayLogo} alt="Motorway Logo" className="logo" />
          </a>
        </div>
        <p className="image-description">
          {img.description || "No description available"}
        </p>
      </div>
      <LazyLoad height="100%" width="100%" threshold={0.95}>
        <img
          src={`${img.url}.jpg`}
          alt="Thumbnail"
          className="thumbnail"
          onClick={() => openModal(img)}
          loading="lazy"
        />
      </LazyLoad>
    </div>
  );
};