const express = require('express');
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys').apiKey;

router.get('/', async (req, res) => {
  try {
    const img_config = await axios.get(
      `http://api.themoviedb.org/3/configuration?api_key=${keys}`
    );
    return res.json(img_config.data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
