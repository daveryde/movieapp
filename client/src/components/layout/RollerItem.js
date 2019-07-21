import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const RollerItem = ({ imageUrl, title }) => {
  return (
    <div
      id={title}
      className='card'
      style={{
        backgroundImage: `url(${imageUrl})`,
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
  {}
)(RollerItem);
