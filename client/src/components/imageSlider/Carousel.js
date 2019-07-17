import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageSlider from './ImageSlider';

const Carousel = ({ movies: { results }, config: { url, backdrop_sizes } }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImagePath] = useState([]);
  const [titles, setImageTitle] = useState([]);

  useEffect(() => {
    if (results !== undefined) {
      const loadedImages = results.map(item => {
        return `${url}/${backdrop_sizes[3]}/${item.backdrop_path}`;
      });

      const loadedTitles = results.map(item => {
        return item.title;
      });

      setImagePath(loadedImages);
      setImageTitle(loadedTitles);
    }
  }, [results, backdrop_sizes, url]);

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? lastIndex : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  const autoSlide = option => {
    if (option) {
      if (currentImageIndex !== images.length - 1) {
        setTimeout(() => nextSlide(), 4000);
      } else {
        setCurrentImageIndex(0);
        autoSlide();
      }
    }
  };

  return (
    <ImageSlider
      imageUrl={images[currentImageIndex]}
      title={titles[currentImageIndex]}
      autoSlide={autoSlide}
    />
  );
};

Carousel.propTypes = {
  movies: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

export default Carousel;
