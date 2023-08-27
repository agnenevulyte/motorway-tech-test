export const pagination = (images, currentPage, imagesPerPage) => {
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    return images.slice(indexOfFirstImage, indexOfLastImage);
  };