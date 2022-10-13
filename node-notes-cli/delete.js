const fs = require('fs');
const index = process.argv[3];

module.exports = function remove(json) {
  if (json.notes[index] !== undefined) {
    delete json.notes[index];

    fs.writeFile('data.json', JSON.stringify(json, null, 2), err => {
      if (err) throw err;
    });
  }
};
