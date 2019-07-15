import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../layout/MovieItem';

const Trending = ({ config, movies }) => {
  return (
    <div>
      {movies.results !== undefined ? (
        movies.results.map(movie => (
          <MovieItem item={movie} key={movie.id} config={config} />
        ))
      ) : (
        <p>Oops! No movies to display</p>
      )}
    </div>
  );
};

Trending.propTypes = {
  config: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired
};

export default Trending;
