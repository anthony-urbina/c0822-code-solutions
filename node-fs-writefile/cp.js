const fs = require('fs');
const file = process.argv[2];
fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(process.argv[3], data, err => {
    if (err) throw err;
  });
});
