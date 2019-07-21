import React from 'react';
import PropTypes from 'prop-types';

const MovieDetail = ({ item, config }) => {
  return (
    <div>
      <h1>Movie Detail</h1>
    </div>
  );
};

MovieDetail.propTypes = {
  item: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

export default MovieDetail;
