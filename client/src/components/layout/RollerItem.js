import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { getMovieById } from '../../actions/searchResults';

const RollerItem = ({ url, image, size, getMovieById, history }) => {
  return (
    <div
      id={image.id}
      onClick={async () => {
        await getMovieById(image.id);
        history.push('/movieDetail');
      }}
      className='card'
      style={{
        backgroundImage: `url(${url}/${size[3]}/${image.poster_path})`,
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '184px',
        height: '40vh'
      }}
    />
  );
};

RollerItem.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  size: PropTypes.array.isRequired,
  getMovieById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  config: state.imgConfig
});

export default connect(
  mapStateToProps,
  { getMovieById }
)(withRouter(RollerItem));
