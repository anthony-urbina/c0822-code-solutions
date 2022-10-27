const express = require('express');
const path = require('node:path');
const app = express();

const pathToPublicDirectory = path.join(__dirname, 'public');

const staticMiddleware = express.static(pathToPublicDirectory);

app.use(staticMiddleware);

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
