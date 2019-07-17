import React from 'react';
import Roller from '../imageRoller/Roller';

const Upcoming = ({ config, movies }) => {
  return <Roller movies={movies} config={config} />;
};

export default Upcoming;
