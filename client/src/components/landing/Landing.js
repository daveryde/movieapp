import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrent } from '../../actions/upcomingMovies';
import { getConfig } from '../../actions/imgConfig';
import { getTrending } from '../../actions/trendingMedia';

import Showcase from '../sections/Showcase';
import Main from '../sections/Main';

const Landing = ({ getConfig, getCurrent, getTrending, config, upcoming }) => {
  useEffect(() => {
    getConfig();
    getCurrent();
    getTrending();
  }, [getConfig, getCurrent, getTrending]);

  return (
    <Fragment>
      <div className='flex-container landing justify-center'>
        <Showcase config={config} upcoming={upcoming} />
      </div>
      <section>
        <Main />
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  getConfig: PropTypes.func.isRequired,
  getCurrent: PropTypes.func.isRequired,
  getTrending: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
  upcoming: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  config: state.imgConfig,
  upcoming: state.upcomingMovies,
  trending: state.trendingMovies
});

export default connect(
  mapStateToProps,
  { getConfig, getCurrent, getTrending }
)(Landing);
