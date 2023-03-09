const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((element) => species.find(({ id }) => id === element));
}

module.exports = getSpeciesByIds;
