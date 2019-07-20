const express = require('express');
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys');

router.get('/', async (req, res) => {
  try {
    const img_config = await axios.get(
      `https://api.themoviedb.org/3/configuration?api_key=1a603b96c828e25a7d82128deeaa4724`
    );
    return res.json(img_config.data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
