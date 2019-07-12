import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageSlider from './ImageSlider';

const Carousel = ({ movies: { results }, config }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImagePath] = useState([]);

  useEffect(() => {
    if (results !== undefined) {
      const loadedImages = results.map(item => {
        return item.backdrop_path;
      });

      setImagePath(loadedImages);
    }
  }, [results]);

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? lastIndex : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  const autoSlide = option => {
    if (option) {
      setTimeout(() => nextSlide(), 4000);
    }
  };

  return (
    <ImageSlider
      url={config.url}
      size={config.backdrop_sizes}
      imageUrl={images[currentImageIndex]}
      autoSlide={autoSlide}
    />
  );
};

Carousel.propTypes = {
  movies: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

export default Carousel;
