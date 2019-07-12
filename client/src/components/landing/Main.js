import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrent } from '../../actions/upcomingMovies';
import { getConfig } from '../../actions/imgConfig';
import MovieItem from './MovieItem';

const Main = ({ getCurrent, getConfig, movies, config }) => {
  useEffect(() => {
    getCurrent();
    getConfig();
  }, [getCurrent, getConfig]);

  return (
    <section
      id='movie'
      className='flex-container direction-row-wrap justify-center'
    >
      {movies.results !== undefined ? (
        movies.results.map(movie => (
          <MovieItem item={movie} key={movie.id} config={config} />
        ))
      ) : (
        <p>Oops! No movies to display</p>
      )}
    </section>
  );
};

Main.propTypes = {
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
  { getCurrent, getConfig }
)(Main);
