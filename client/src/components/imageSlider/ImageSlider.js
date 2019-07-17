import React from 'react';

const ImageSlider = ({ imageUrl, title, autoSlide }) => {
  if (!imageUrl) {
    return (
      <div>
        <p>LOADING ... </p>
      </div>
    );
  } else {
    autoSlide(true);
    return (
      <div>
        <img src={imageUrl} alt={imageUrl} />
        <h1 className='image-slider-title'>{title}</h1>
      </div>
    );
  }
};

export default ImageSlider;
