import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovieTrailers } from '../../actions/searchResults';
import Loader from '../layout/Loader';
import NumberFormat from 'react-number-format';

const MovieDetail = ({ search, config, getMovieTrailers, trailers }) => {
  const [movieItem, setMovieItem] = useState({});

  useEffect(() => {
    if (search) {
      setMovieItem(search);
      getMovieTrailers(search.id);
    }
  }, [search, getMovieTrailers]);
  const {
    // adult,
    backdrop_path,
    // belongs_to_collection,
    budget,
    // genres,
    // homepage,
    // id,
    // imdb_id,
    // orginal_language,
    original_title,
    overview,
    // popularity,
    poster_path,
    // production_companies,
    // production_countries,
    release_date,
    revenue,
    runtime,
    // spoken_languages,
    status,
    // tagline,
    // title,
    // video,
    vote_average
    // vote_count
  } = movieItem;

  const rating = Math.ceil((vote_average * 5) / 10);

  let stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<i key={i} className='fas fa-star' />);
  }

  return (
    <Fragment>
      {!search.loading ? (
        <div className='container-fluid'>
          <div
            className='movie-detail-banner'
            style={{
              backgroundImage: `url(${config.url}/${
                config.backdrop_sizes[3]
              }/${backdrop_path})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              backgroundPosition: 'cover',
              width: '100vw',
              height: '90vh'
            }}
          />
          <div
            className='movie-thumbnail-poster'
            style={{
              backgroundImage: `url(${config.url}/${
                config.poster_sizes[3]
              }/${poster_path})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              backgroundPosition: 'cover',
              width: '184px',
              height: '40vh'
            }}
          >
            <p className='movie-poster-date'>{release_date}</p>
          </div>

          <div className='movie-poster-info'>
            <h1>{original_title}</h1>
            <p>{stars.map(item => item)}</p>
          </div>

          <div className='flex-container summary-container'>
            <div className='summary-section'>
              <div className='summary-title'>
                <h2>Summary</h2>
              </div>
              <div className='summary-overview'>
                <p>{overview}</p>
                <div className='summary-table-detail'>
                  <table>
                    <thead>
                      <tr>
                        <td>Budget</td>
                        <td>Revenue</td>
                        <td>Runtime</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <NumberFormat
                            value={budget}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                          />
                        </td>
                        <td>
                          <NumberFormat
                            value={revenue}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                          />
                        </td>
                        <td>{runtime} minutes</td>
                        <td>{status}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className='flex-container trailer-container'>
            {trailers !== undefined ? (
              trailers.map((item, index) => (
                <div className='trailer-item-container' key={item.id}>
                  <p>{item.name}</p>
                  <iframe
                    className='trailer-frame'
                    title={index}
                    width='425'
                    height='300'
                    src={`https://www.youtube.com/embed/${item.key}`}
                  />
                </div>
              ))
            ) : (
              <p>Nothing to see here</p>
            )}
          </div>
          {/* <span style={{ font: 'white' }}>{original_title}</span>
          <p>{adult}</p>
          <p>{backdrop_path}</p>
          <p>{belongs_to_collection}</p>
          <p>{budget}</p>
          <p>{genres}</p>
          <p>{homepage}</p>
          <p>{id}</p>
          <p>{imdb_id}</p>
          <p>{orginal_language}</p>
          <p>{original_title}</p>
          <p>{overview}</p>
          <p>{popularity}</p>
          <p>{poster_path}</p>
          <p>{production_companies}</p>
          <p>{production_countries}</p>
          <p>{release_date}</p>
          <p>{revenue}</p>
          <p>{runtime}</p>
          <p>{spoken_languages}</p>
          <p>{status}</p>
          <p>{tagline}</p>
          <p>{title}</p>
          <p>{video}</p>
          <p>{vote_average}</p>
          <p>{vote_count}</p> */}
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

MovieDetail.propTypes = {
  search: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  trailers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  search: state.searchResults.item_details,
  config: state.imgConfig,
  trailers: state.searchResults.movie_trailers
});

export default connect(
  mapStateToProps,
  { getMovieTrailers }
)(MovieDetail);
