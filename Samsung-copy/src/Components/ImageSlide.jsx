import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slider">
      <div className="slide-content">
        <img src={images[currentIndex].url} alt={`Slide ${currentIndex}`} className="slide-image" />
        <div className="overlay">
          <h4>{images[currentIndex].title}</h4>
          <h2>{images[currentIndex].text}</h2>
          <button onClick={() => alert(`Button clicked on slide ${currentIndex + 1}`)}>
            {images[currentIndex].buttonText}
          </button>
        </div>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
