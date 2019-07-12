import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrent } from '../../actions/upcomingMovies';
import { getConfig } from '../../actions/imgConfig';
import Carousel from '../imageSlider/Carousel';
import Main from './Main';

const Landing = ({ config, movies }) => {
  useEffect(() => {
    getCurrent();
    getConfig();
  }, []);

  return (
    <Fragment>
      <div className='flex-container landing justify-center'>
        <Carousel movies={movies} key={movies.results.id} config={config} />
      </div>
      <div>
        <Main />
      </div>
    </Fragment>
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
