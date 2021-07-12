const express = require('express');
const router = express.Router();
const axios = require('axios');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../../config/.env') // .gitignored secrets file
});

router.get('/', async (req, res) => {
  try {
    const img_config = await axios.get(
      `https://api.themoviedb.org/3/configuration?api_key=${
        process.env.API_KEY
      }`
    );
    return res.json(img_config.data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
