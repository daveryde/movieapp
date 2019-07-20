const express = require('express');
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys');

router.get('/', async (req, res) => {
  try {
    const img_config = await axios.get(
      `https://api.themoviedb.org/3/configuration?api_key=${keys.apiKey}`
    );
    return res.json(img_config.data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
