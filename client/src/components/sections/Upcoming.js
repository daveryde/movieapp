import React from 'react';

import Roller from '../imageRoller/Roller';

const Upcoming = ({ config, movies }) => {
  return (
    <>
      <h1 className='image-category-title'>Upcoming Movies</h1>
      <Roller movies={movies} config={config} />
    </>
  );
};

export default Upcoming;
