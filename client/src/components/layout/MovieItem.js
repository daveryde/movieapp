import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({
  item: { poster_path, title },
  config: { url, backdrop_sizes }
}) => {
  return (
    <div className='search-item'>
      <div
        id={title}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${url}/${backdrop_sizes[0]}/${poster_path})`,
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
};

MovieItem.propTypes = {
  item: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

export default MovieItem;
