import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const RollerItem = ({ imageUrl, title }) => {
  return (
    <div className='card'>
      <img src={imageUrl} alt={title} className='card-media' />
    </div>
  );
};

RollerItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  config: state.imgConfig
});

export default connect(
  mapStateToProps,
  {}
)(RollerItem);
