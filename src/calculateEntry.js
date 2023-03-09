const data = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  child: entrants.filter(({ age }) => age < 18).length,
  adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
  senior: entrants.filter(({ age }) => age >= 50).length,
});
// { child: 3, adult: 2, senior: 1 }

const calculateEntry = (entrants) => {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const { child: countChilds, adult: countAdults, senior: countSenior } = countEntrants(entrants);
  const { child, adult, senior } = data.prices;
  return child * countChilds + adult * countAdults + senior * countSenior;
};
// exemplo de saída: 187.94
module.exports = { calculateEntry, countEntrants };
