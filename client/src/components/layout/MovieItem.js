import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MovieItem = ({
  item: { poster_path, title },
  config: { url, backdrop_sizes }
}) => {
  return (
    <div className='card'>
      <img
        src={`${url}/${backdrop_sizes[0]}/${poster_path}`}
        alt={title}
        className='card-media'
      />
    </div>
  );
};

MovieItem.propTypes = {
  item: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  config: state.imgConfig
});

export default connect(
  mapStateToProps,
  {}
)(MovieItem);
