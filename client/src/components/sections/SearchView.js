import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieItem from '../layout/MovieItem';

const SearchView = ({ searchResults }) => {
  return (
    <div>
      <h1>Search View</h1>
      <div className='flex-container direction-row-wrap'>
        {searchResults.results.map(item => (
          <MovieItem item={item} />
        ))}
      </div>
    </div>
  );
};

SearchView.propTypes = {
  searchResults: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

export default connect(
  mapStateToProps,
  {}
)(SearchView);
