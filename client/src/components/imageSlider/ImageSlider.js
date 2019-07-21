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
            width: '100vw',
            minHeight: '100vh',
            backgroundPosition: '40% 30%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: '0.4'
          }}
        />
      </div>
    );
  }
};

export default ImageSlider;
