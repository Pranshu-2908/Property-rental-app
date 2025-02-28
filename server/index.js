const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();
const port = 3005;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {});
