import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../layout/Loader';

const MovieDetail = ({ search, config }) => {
  const [movieItem, setMovieItem] = useState({});
  // adult: false,
  // backdrop_path: '',
  // belongs_to_collection: null,
  // budget: 0,
  // genres: [],
  // homepage: '',
  // id: 0,
  // imdb_id: '',
  // orginal_language: '',
  // original_title: '',
  // overview: '',
  // popularity: 0,
  // poster_path: '',
  // production_companies: [],
  // production_countries: [],
  // release_date: '',
  // revenue: 0,
  // runtime: 0,
  // spoken_languages: [],
  // status: '',
  // tagline: '',
  // title: '',
  // video: false,
  // vote_average: 0,
  // vote_count: 0

  useEffect(() => {
    if (search) {
      setMovieItem(search);
    }
  }, [search]);

  // const {
  //   adult,
  //   backdrop_path,
  //   belongs_to_collection,
  //   budget,
  //   genres,
  //   homepage,
  //   id,
  //   imdb_id,
  //   orginal_language,
  //   original_title,
  //   overview,
  //   popularity,
  //   poster_path,
  //   production_companies,
  //   production_countries,
  //   release_date,
  //   revenue,
  //   runtime,
  //   spoken_languages,
  //   status,
  //   tagline,
  //   title,
  //   video,
  //   vote_average,
  //   vote_count
  // } = search.item_details;

  // setMovieItem({
  //   adult,
  //   backdrop_path,
  //   belongs_to_collection,
  //   budget,
  //   genres,
  //   homepage,
  //   id,
  //   imdb_id,
  //   orginal_language,
  //   original_title,
  //   overview,
  //   popularity,
  //   poster_path,
  //   production_companies,
  //   production_countries,
  //   release_date,
  //   revenue,
  //   runtime,
  //   spoken_languages,
  //   status,
  //   tagline,
  //   title,
  //   video,
  //   vote_average,
  //   vote_count
  // });

  const {
    adult,
    backdrop_path,
    belongs_to_collection,
    budget,
    genres,
    homepage,
    id,
    imdb_id,
    orginal_language,
    original_title,
    overview,
    popularity,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline,
    title,
    video,
    vote_average,
    vote_count
  } = movieItem;

  const rating = Math.ceil((vote_average * 5) / 10);

  let stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<i key={i} class='fas fa-star' />);
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
              backgroundSize: '100%',
              backgroundPosition: 'cover',
              width: '100vw',
              height: '85vh'
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
            <p>{release_date}</p>
          </div>

          <div className='movie-poster-info'>
            <h1>{original_title}</h1>
            <p>{stars.map(item => item)}</p>
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
  search: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  search: state.searchResults.item_details,
  config: state.imgConfig
});

export default connect(
  mapStateToProps,
  {}
)(MovieDetail);
