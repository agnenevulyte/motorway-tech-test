import React, { useEffect, useState } from "react";
import { Paginator } from "../components/Paginator";
import { ImageCard } from "../components/ImageCard";
import { ImageModal } from "../components/ImageModal";
import { fetchImages } from "../helpers/fetchImages";
import { pagination } from "../helpers/pagination";
import "./HomePage.css";

const imagesPerPage = 10;

export const HomePage = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages()
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Error setting images:", error);
      });
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const currentImages = pagination(images, currentPage, imagesPerPage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  return (
    <div className="home-page-wrapper">
      <div className="image-grid">
        {currentImages.map((img) => (
          <ImageCard key={img.id} img={img} openModal={openModal} />
        ))}
      </div>
      {selectedImage && (
        <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
      )}
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};