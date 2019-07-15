import React from 'react';
import MovieItem from '../layout/MovieItem';

const Upcoming = ({ config, movies }) => {
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

export default Upcoming;
