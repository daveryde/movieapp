import React, { Fragment } from 'react';
import Arrow from './Arrow';

const ImageSlider = ({ url, size, imageUrl, prev, next }) => {
  const styles = {
    width: '10px',
    height: '100%'
  };

  return (
    <Fragment>
      <Arrow
        direction='left'
        clickFunction={prev}
        glyph='&#9664;'
        styles={styles}
      />
      <img src={`${url}/${size[2]}/${imageUrl}`} />

      <Arrow
        direction='right'
        clickFunction={next}
        glyph='&#9654;'
        styles={styles}
      />
    </Fragment>
  );
};

export default ImageSlider;
