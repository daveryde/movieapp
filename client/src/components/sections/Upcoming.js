import React, { Fragment } from 'react';
import Roller from '../imageRoller/Roller';

const Upcoming = ({ config, movies }) => {
  return (
    <Fragment>
      <h1 className='image-category-title'>Upcoming Movies</h1>
      <Roller movies={movies} config={config} />
    </Fragment>
  );
};

export default Upcoming;
