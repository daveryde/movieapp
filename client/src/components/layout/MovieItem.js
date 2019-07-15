import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MovieItem = ({ item, config }) => {
  return (
    <div className='card'>
      <img
        src={`${config.url}/${config.backdrop_sizes[0]}/${item.poster_path}`}
        alt={item.title}
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
