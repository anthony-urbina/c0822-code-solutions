const pg = require('pg');
const express = require('express');
const app = express();
const jsonMiddleware = express.json();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(jsonMiddleware);

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "uno";
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;

  if (!name) {
    res.status(400).json({ error: 'name is a required field.' });
  } else if (!course) {
    res.status(400).json({ error: 'course is a required field.' });
  } else if (!score) {
    res.status(400).json({ error: 'score is a required field.' });
  } else if (Number(score) < 0 && Number(score) >= 100) {
    res.status(400).json({ error: 'score must be a positive integer and must not exceed 100.' });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
    const params = [name, course, score];

    db.query(sql, params)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err.message);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
}
);

app.put('/api/grades/:gradeId', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const gradeId = req.params.gradeId;

  if (gradeId < 0 || isNaN(gradeId)) {
    res.status(400).json({ error: 'gradeId must be a positive integer.' });
  } else if (!name) {
    res.status(400).json({ error: 'name is a required field.' });
  } else if (!course) {
    res.status(400).json({ error: 'course is a required field.' });
  } else if (!score) {
    res.status(400).json({ error: 'score is a required field.' });
  } else if (Number(score) < 0 || Number(score) >= 100) {
    res.status(400).json({ error: 'score must be a positive integer and must not exceed 100.' });
  } else {
    const sql = `
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *;
      `;
    const params = [name, course, score, gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err.message);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.params.gradeId;
  if (gradeId < 0 || isNaN(gradeId)) {
    res.status(400).json({ error: 'gradeId must be a positive integer.' });
  } else {
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *;
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.status(204).send();
        }
      })
      .catch(err => {
        console.error(err.message);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
