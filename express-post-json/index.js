const express = require('express');
const app = express();
const grades = {};
let nextId = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const container = [];
  for (const key in grades) {
    container.push(grades[key]);
  }
  res.json(container);
});

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201);
  res.send([grades[nextId]]);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
