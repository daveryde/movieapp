const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming/?api_key=1a603b96c828e25a7d82128deeaa4724`
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
      `https://api.themoviedb.org/3/trending/all/day?api_key=1a603b96c828e25a7d82128deeaa4724`
    );

    const results = result.data;

    return res.json(results);
  } catch (err) {
    console.error(err);
    return res.json({ msg: err });
  }
});

router.get('/multisearch/:query', async (req, res) => {
  try {
    const URLformatted = encodeURI(req.params.query);
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=1a603b96c828e25a7d82128deeaa4724&language=en-US&query=${URLformatted}&page=1&include_adult=false`
    );

    return res.json(result.data);
  } catch (err) {
    console.error(err);
    return res.json({ msg: err });
  }
});

module.exports = router;
