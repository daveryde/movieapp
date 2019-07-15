import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../imageSlider/Carousel';

const Showcase = ({ upcoming, config }) => {
  return (
    <Carousel movies={upcoming} key={upcoming.results.id} config={config} />
  );
};

Showcase.propTypes = {
  upcoming: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

export default Showcase;
