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
      <div className='direction-column-wrap'>
        <h1 className='image-slider-title'>{title}</h1>
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            maxWidth: '100vw',
            height: '100vh',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            opacity: '0.4'
          }}
        />
      </div>
    );
  }
};

export default ImageSlider;
