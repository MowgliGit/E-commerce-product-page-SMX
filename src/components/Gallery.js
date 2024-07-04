import React, { useState } from "react";

export default function Gallery() {
  const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };

  const handleMainImageClick = () => {
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(mainImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setMainImage(images[nextIndex]);
  };

  const handlePreviousImage = () => {
    const currentIndex = images.indexOf(mainImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setMainImage(images[previousIndex]);
  };

  return (
    <>
      <div className="galleryCard">
        <div onClick={handleMainImageClick}>
          <img src={mainImage} alt="main" className="main-image" />
        </div>
        <div className="other-images">
          {images.map((image) => (
            <div key={image} className="image">
              <img
                src={image}
                alt="thumbnail"
                className="image"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay">
          <div className="lightbox">
            <div className="box">
              <button className="lightbox-close" onClick={handleCloseLightbox}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <div className="main-box">
                <div className="icons">
                  <button
                    className="icon-previous"
                    onClick={handlePreviousImage}
                  >
                    <svg
                      className="icon"
                      width="12"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1 3 9l8 8"
                        // stroke="#1D2026"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                  <img src={mainImage} alt="main" className="main-image-open" />
                  <button className="icon-next" onClick={handleNextImage}>
                    <svg
                      className="icon"
                      width="13"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2 1 8 8-8 8"
                        // stroke="#1D2026"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="other-images-open ">
                {images.map((image) => (
                  <div key={image}>
                    <img
                      src={image}
                      alt="thumbnail"
                      className="image-open"
                      onClick={() => handleImageClick(image)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
