import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrent } from '../actions/upcomingMovies';
import { getConfig } from '../actions/imgConfig';
import Carousel from './Carousel';

const Landing = ({ config, movies }) => {
  useEffect(() => {
    getCurrent();
    getConfig();
  }, [getCurrent, getConfig]);

  console.log();

  return (
    <div className='flex-container landing justify-center'>
      <Carousel movies={movies} key={movies.results.id} config={config} />
    </div>
  );
};

Landing.propTypes = {
  getCurrent: PropTypes.func.isRequired,
  getConfig: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies: state.postUpcoming,
  config: state.imgConfig
});

export default connect(
  mapStateToProps,
  { getConfig, getCurrent }
)(Landing);
