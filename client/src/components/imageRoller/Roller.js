import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../imageRoller/Arrow';
import ImageRoller from './ImageRoller';

const Roller = ({ movies: { results }, config: { url, backdrop_sizes } }) => {
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

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  let firstFourImages = images.slice(currentImageIndex, currentImageIndex + 4);

  if (firstFourImages.length < 4) {
    firstFourImages = firstFourImages.concat(
      images.slice(0, 4 - firstFourImages.length)
    );
  }

  return (
    <div className='flex-container'>
      <Arrow direction={'left'} clickFunction={prevSlide} />
      {firstFourImages.map((image, index) => {
        return (
          <ImageRoller
            key={index}
            imageUrl={image}
            title={titles[currentImageIndex]}
          />
        );
      })}
      <Arrow direction={'right'} clickFunction={nextSlide} />
    </div>
  );
};

Roller.propTypes = {
  movies: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

export default Roller;
