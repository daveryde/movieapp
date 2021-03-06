import React from 'react';
import PropTypes from 'prop-types';

import Roller from '../imageRoller/Roller';

const Trending = ({ config, movies }) => {
  return (
    <>
      <h1 className='image-category-title'>Trending Movies</h1>
      <Roller movies={movies} config={config} />
    </>
  );
};

Trending.propTypes = {
  config: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired
};

export default Trending;
