const fs = require('fs');
const index = process.argv[3];
const note = process.argv[4];

module.exports = function update(json) {
  if (json.notes[index] !== undefined) {
    json.notes[index] = note;

    fs.writeFile('data.json', JSON.stringify(json, null, 2), err => {
      if (err) throw err;
    });
  }
};
