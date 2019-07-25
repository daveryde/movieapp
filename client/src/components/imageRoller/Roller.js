import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../imageRoller/Arrow';
import ImageRoller from './ImageRoller';

const Roller = ({ movies: { results }, config: { url, poster_sizes } }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImagePath] = useState([]);
  const [titles, setImageTitle] = useState([]);

  useEffect(() => {
    if (results !== undefined) {
      // ${url}/${poster_sizes[3]}/${item.poster_path

      const loadedImages = results.map(item => {
        return item;
      });

      const loadedTitles = results.map(item => {
        return item.title;
      });

      setImagePath(loadedImages);
      setImageTitle(loadedTitles);
    }
  }, [results, poster_sizes, url]);

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

  let mediaWidth = window.outerWidth;
  let firstImages;

  if (mediaWidth < 450) {
    firstImages = images.slice(currentImageIndex, currentImageIndex + 3);

    if (firstImages.length < 3) {
      firstImages = firstImages.concat(images.slice(0, 3 - firstImages.length));
    }
  } else {
    firstImages = images.slice(currentImageIndex, currentImageIndex + 6);

    if (firstImages.length < 6) {
      firstImages = firstImages.concat(images.slice(0, 6 - firstImages.length));
    }
  }

  return (
    <div
      className='flex-container roller-container'
      style={{ margin: '-0.5rem' }}
    >
      <Arrow direction={'left'} clickFunction={prevSlide} />
      {firstImages.map((image, index) => {
        return (
          <ImageRoller
            key={index}
            image={image}
            url={url}
            size={poster_sizes}
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
