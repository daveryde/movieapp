import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovieById } from '../../actions/searchResults';

const MovieItem = ({
  item: { poster_path },
  id,
  config: { url, backdrop_sizes },
  getMovieById,
  history
}) => {
  return (
    <div className='search-item'>
      <div
        onClick={async () => {
          await getMovieById(id);
          history.push('/movieDetail');
        }}
        id={id}
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

export default connect(
  null,
  { getMovieById }
)(withRouter(MovieItem));
