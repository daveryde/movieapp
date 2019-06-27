import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageSlider from './ImageSlider';

const Carousel = ({ movies: { results }, config }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImagePath] = useState([]);

  useEffect(() => {
    if (results !== undefined) {
      let temp = [];
      results.map(item => {
        temp.push(item.backdrop_path);
      });

      setImagePath(temp);
    }
  }, []);

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? lastIndex : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  return (
    <ImageSlider
      url={config.url}
      size={config.backdrop_sizes}
      imageUrl={images[currentImageIndex]}
      prev={previousSlide}
      next={nextSlide}
    />
  );
};

Carousel.propTypes = {
  movie: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

export default Carousel;
