const fs = require('fs');
const note = process.argv[3];
module.exports = function create(json) {
  if (note !== undefined) {
    json.notes[json.nextId] = note;
    json.nextId++;
    fs.writeFile('data.json', JSON.stringify(json, null, 2), err => {
      if (err) throw err;
    });
  }
};
