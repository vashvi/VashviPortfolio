import React, { useState, useEffect } from 'react';
import './Slider.css'; // Assuming you have your styles in this file

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState({});
  const navButtons = [
    "Screenshot 2025-01-09 180656.png",
    "Screenshot 2025-01-09 182547.png",
    "Screenshot 2025-01-09 183129.png",
    "Screenshot 2025-01-09 183416.png",
    "Screenshot 2025-01-09 183748.png",
    "Screenshot 2025-01-09 183900.png",
  ];

  useEffect(() => {
    preloadImages();
  }, []);

  const preloadImages = () => {
    const images = {};
    navButtons.forEach((src) => {
      if (!images[src]) {
        const img = new Image();
        img.src = src;
        images[src] = img;
      }
    });
    setPreloadedImages(images);
  };

  const showSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const handleAction = (action) => {
    if (action === "next") {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % navButtons.length);
    } else if (action === "prev") {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex - 1 + navButtons.length) % navButtons.length
      );
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      handleAction('next');
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      handleAction('prev');
    }
  };

  const handleThumbnailClick = (index) => {
    showSlide(index);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="image-slider">
      <section className="slider__content">
        <button type="button" className="slider-control--button prev-button" onClick={() => handleAction('prev')}>
          <svg width="16" height="16" fill="currentColor" className="icon arrow-left-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </button>
        <main className="image-display">
          <img src={navButtons[currentSlideIndex]} alt="Slide" />
        </main>
        <button type="button" className="slider-control--button next-button" onClick={() => handleAction('next')}>
          <svg width="16" height="16" fill="currentColor" className="icon arrow-right-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
      </section>
      <nav className="slider-navigation">
        {navButtons.map((imgSrc, index) => (
          <button
            key={index}
            className="nav-button"
            onClick={() => handleThumbnailClick(index)}
            aria-selected={index === currentSlideIndex}
          >
            <img className="thumbnail" src={imgSrc} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Slider;
