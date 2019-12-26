const express = require('express');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 5000;
const CLIENT_PATH = path.join(__dirname, '../client/dist/');

app.use(express.static(CLIENT_PATH));

// //ejs routing?
// app.get('/', );

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🛸`);
})