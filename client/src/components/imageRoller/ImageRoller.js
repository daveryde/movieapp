import React from 'react';
import PropTypes from 'prop-types';
import RollerItem from '../layout/RollerItem';

const ImageRoller = ({ image, url, size, title }) => {
  if (!image) {
    return (
      <div>
        <p>LOADING ... </p>
      </div>
    );
  } else {
    return <RollerItem image={image} url={url} size={size} title={title} />;
  }
};

ImageRoller.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string
};

export default ImageRoller;
