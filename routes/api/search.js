const express = require('express');
const router = express.Router();
const { api_key } = require('../../config/keys');
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming/?api_key=${api_key}`
    );

    const { results } = result.data;

    return res.json(results);
  } catch (err) {
    console.error(err);
    return res.json({ msg: err });
  }
});

router.get('/multisearch/:query', async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${
        req.params.query
      }`
    );

    return res.json(result.data);
  } catch (err) {
    console.error(err);
    return res.json({ msg: err });
  }
});

module.exports = router;
