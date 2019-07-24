import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getConfig } from '../../actions/imgConfig';
import { getMovieById } from '../../actions/searchResults';
import Loader from '../layout/Loader';
import MovieItem from '../layout/MovieItem';

const SearchView = ({
  getConfig,
  getMovieById,
  config,
  searchResults,
  history
}) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getConfig();

    if (searchResults.results) {
      const found = searchResults.results.map(item => {
        return item;
      });

      setResult(found);
    }
  }, [getConfig, searchResults.results]);

  return (
    <Fragment>
      {searchResults.loading ? (
        <Loader />
      ) : (
        <div className='search-results-container'>
          <h1 className='image-category-title'>
            {searchResults.search_history === undefined
              ? 'Search View'
              : searchResults.search_history[0]
              ? `Results for: ${searchResults.search_history[0]}`
              : 'Results for: '}
          </h1>
          <div className='search-results'>
            {result.map((item, index) => (
              <MovieItem id={item.id} key={index} item={item} config={config} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

SearchView.propTypes = {
  config: PropTypes.object.isRequired,
  searchResults: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  config: state.imgConfig,
  searchResults: state.searchResults
});

export default connect(
  mapStateToProps,
  { getConfig, getMovieById }
)(SearchView);
