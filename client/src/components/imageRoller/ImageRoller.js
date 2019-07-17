import React from 'react';
import PropTypes from 'prop-types';
import RollerItem from '../layout/RollerItem';

const ImageRoller = ({ imageUrl, title }) => {
  if (!imageUrl) {
    return (
      <div>
        <p>LOADING ... </p>
      </div>
    );
  } else {
    return <RollerItem imageUrl={imageUrl} title={title} />;
  }
};

ImageRoller.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string
};

export default ImageRoller;
