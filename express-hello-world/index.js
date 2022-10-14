const express = require('express');
const app = express();

app.use((req, res) => {
  // eslint-disable-next-line no-console
  res.send('Sup, Mundo!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
