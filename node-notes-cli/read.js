module.exports = function read(json) {
  const container = [];
  for (var key in json.notes) {
    container.push(`${key}: ${json.notes[key]}`);
  }
  return container;
};
