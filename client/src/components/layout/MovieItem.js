import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MovieItem = ({
  item: { poster_path, title },
  config: { url, backdrop_sizes }
}) => {
  return (
    <div
      id={title}
      className='card'
      style={{
        backgroundImage: `url(${url}/${backdrop_sizes[0]}/${poster_path})`
      }}
    />
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
