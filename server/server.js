const express = require('express');
const path = require('path');

const app = express();

const filePath = path.resolve(__dirname, '../public');
app.use(express.static(filePath));
app.listen(3000, () => console.log('Listening on PORT: 3000'));
