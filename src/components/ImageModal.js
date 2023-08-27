import React from "react";
import "./ImageModal.css";

export const ImageModal = ({ selectedImage, closeModal }) => {
  return (
    <div className={`modal ${selectedImage ? "active" : ""}`}>
      {selectedImage && (
        <React.Fragment>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            src={`${selectedImage.url}.jpg`}
            alt="Displayed Item"
            className="modal-image"
          />
        </React.Fragment>
      )}
    </div>
  );
};