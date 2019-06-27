const express = require('express');

const app = express();

app.use('/search', require('./routes/api/search'));
app.use('/images', require('./routes/api/images'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
