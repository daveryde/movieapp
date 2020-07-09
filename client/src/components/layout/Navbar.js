import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { multiSearch } from '../../actions/searchResults';

const Navbar = ({ multiSearch, history }) => {
  const [keyword, setKeyword] = useState({
    searchTerms: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();

    if (keyword.searchTerms) {
      await multiSearch(keyword.searchTerms);
      history.push('/searchView');
    }
  };

  const onChange = e => {
    setKeyword({ [e.target.name]: e.target.value });
  };

  return (
    <div className='navbar-container'>
      <div className='navbar bg-primary'>
        <div className='navbar-logo'>
          <Link to='/'>
            <h1 className='navbar-branding'>MovieApp</h1>
          </Link>
        </div>
        <div className='navbar-searchbox'>
          <form
            onSubmit={e => {
              handleSubmit(e);
            }}
          >
            <input
              type='text'
              name='searchTerms'
              placeholder='search: lion king'
              onChange={e => onChange(e)}
            />
            <button type='submit'>
              <i className='far fa-arrow-alt-circle-right' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  results: state.searchResults.results,
  search_history: state.searchResults.search_history
});

export default connect(
  mapStateToProps,
  { multiSearch }
)(withRouter(Navbar));
