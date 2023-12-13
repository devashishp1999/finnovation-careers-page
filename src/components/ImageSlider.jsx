// ImageSlider.js
import React, { useState } from "react";

const ImageSlider = ({ images, closeSlider }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e) => {
    stopBubbling(e);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = (e) => {
    stopBubbling(e);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  function stopBubbling(e) {
    e.stopPropagation();
  }

  return (
    <div className="image-slider" onClick={closeSlider}>
      <div className="slider-container" onClick={stopBubbling} >
        <button className="slider-button prev" onClick={handlePrev}>
          &lt;
        </button>
        <img
          src={images[currentIndex].img}
          alt={`Slide ${currentIndex}`}
          className="slider-image"
        />
        <button className="slider-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
