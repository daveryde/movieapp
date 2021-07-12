const express = require('express');
const router = express.Router();
const axios = require('axios');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../../config/.env') // .gitignored secrets file
});

router.get('/', async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming/?api_key=${
        process.env.API_KEY
      }`
    );

    const { results } = result.data;

    return res.json(results);
  } catch (err) {
    console.error(err);
    return res.json({ msg: err });
  }
});

router.get('/trending', async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        process.env.API_KEY
      }`
    );

    const results = result.data;

    return res.json(results);
  } catch (err) {
    console.error(err);
    return res.json({ msg: err });
  }
});

router.get('/movie/:query', async (req, res) => {
  try {
    const URLformatted = encodeURI(req.params.query);
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${URLformatted}?api_key=${
        process.env.API_KEY
      }`
    );

    return res.json(result.data);
  } catch (err) {
    console.error(err);
    return res.json({ msg: err });
  }
});

router.get('/multisearch/:query', async (req, res) => {
  try {
    const URLformatted = encodeURI(req.params.query);
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${
        process.env.API_KEY
      }&language=en-US&query=${URLformatted}&page=1&include_adult=false`
    );

    return res.json(result.data);
  } catch (err) {
    console.error(err);
    return res.json({ msg: err });
  }
});

router.get('/movie/:query/trailers', async (req, res) => {
  try {
    const URLformatted = encodeURI(req.params.query);
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${URLformatted}/videos?api_key=${
        process.env.API_KEY
      }&language=en-US`
    );

    return res.json(result.data);
  } catch (err) {
    console.error(err);
    return res.json({ msg: err });
  }
});

module.exports = router;
