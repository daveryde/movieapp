import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Upcoming from './Upcoming';
import Trending from './Trending';

const Main = ({ config, upcoming, trending }) => {
  return (
    <div className='container-fluid'>
      <Upcoming movies={upcoming} config={config} />
      <Trending movies={trending} config={config} />
    </div>
  );
};

Main.propTypes = {
  config: PropTypes.object.isRequired,
  upcoming: PropTypes.object.isRequired,
  trending: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  config: state.imgConfig,
  upcoming: state.upcomingMovies,
  trending: state.trendingMovies
});

export default connect(
  mapStateToProps,
  {}
)(Main);
