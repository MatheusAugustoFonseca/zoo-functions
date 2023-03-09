const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((Element) => Element.id === id).responsibleFor[0];
  const animals = species.find((Element) => Element.id === firstAnimal).residents;
  const oldestAnimal = animals.sort((a, b) => b.age - a.age);
  return Object.values(oldestAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
