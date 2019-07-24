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
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

RollerItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string
};

const mapStateToProps = state => ({
  config: state.imgConfig
});

export default connect(
  mapStateToProps,
  { getMovieById }
)(withRouter(RollerItem));
