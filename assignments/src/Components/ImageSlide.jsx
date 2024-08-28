import React, { useState } from 'react';

const ImageSlide = ({ Images }) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === Images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <h2>Image Slider</h2>
            <button onClick={prevImage}>❮</button>

            <div>
                <img src={Images[currentIndex].url} alt={`Slide ${currentIndex}`} />
            </div>

            <button onClick={nextImage}>❯</button>
        </div>
    );
};

export default ImageSlide;
