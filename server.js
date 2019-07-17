const express = require('express');
const path = require('path');

const app = express();

app.use(express.json({ extended: false }));
app.use('/search', require('./routes/api/search'));
app.use('/images', require('./routes/api/images'));

// Serve static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
