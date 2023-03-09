const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((Element) => Element.name === animal)
    .residents.every((ages) => ages.age >= age);
  return animals;
}

module.exports = getAnimalsOlderThan;
