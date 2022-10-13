const json = require('./data.json');
const read = require('./read');
const create = require('./create');
const remove = require('./delete');
const update = require('./update');

const keyword = process.argv[2];

if (keyword === 'read') {
  const container = read(json);
  for (var i = 0; i < container.length; i++) {
    console.log(container[i]);
  }
} else if (keyword === 'create') {
  create(json);
} else if (keyword === 'delete') {
  remove(json);
} else if (keyword === 'update') {
  update(json);
}
