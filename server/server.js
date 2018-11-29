const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
app.use(bodyParser.json());

// serve static files
const filePath = path.resolve(__dirname, '../public');
app.use(express.static(filePath));

// route different requests
router(app);
app.use((err, req, res, next) => {
  res.json({ error: err.message });
});

app.listen(3000, () => console.log('Listening on PORT: 3000'));
