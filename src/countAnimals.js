const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allAnimals = species.reduce((acc, curr) => {
  acc[curr.name] = curr.residents.length;
  return acc;
}, {});

const allBySpecie = (bySpecie) => species.find((specie) => specie
  .name === bySpecie).residents.length;

const specieAndSex = (bySpecie, bySex) => {
  const findSpecie = species.find((specie) => specie.name === bySpecie);
  const bySexCount = findSpecie.residents.filter((specie) => specie.sex === bySex);
  return bySexCount.length;
};

function countAnimals(animal) {
  if (!animal) {
    return allAnimals;
  } if ('sex' in animal) {
    return specieAndSex(animal.specie, animal.sex);
  }
  return allBySpecie(animal.specie);
}

module.exports = countAnimals;
