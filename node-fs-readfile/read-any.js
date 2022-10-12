const fs = require('fs');
const file = process.argv[2];

fs.readFile(`/workspaces/c0822-code-solutions/node-fs-readfile/${file}`, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
