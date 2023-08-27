import React, { useEffect } from "react";
import "./Paginator.css";

export const Paginator = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPage]);

  return (
    <div className="pagination-container">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        &larr; Prev
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`pagination-button ${
            currentPage === index + 1 ? "active" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        Next &rarr;
      </button>
    </div>
  );
};