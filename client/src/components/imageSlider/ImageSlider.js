import React from 'react';

const ImageSlider = ({ url, size, imageUrl, autoSlide }) => {
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
        <img
          src={`${url}/${size[2]}/${imageUrl}`}
          alt={imageUrl}
          style={{ backgroundColor: '#000', opacity: '0.5' }}
        />
      </div>
    );
  }
};

export default ImageSlider;
