const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalAvailability = (day) => species
  .filter((Element) => Element.availability.includes(day)).map((animal) => animal.name);

const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const daysClosed = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };

const daysOpened = daysOfWeek.slice(0, 6).reduce((acc, curr) => ({
  ...acc,
  [curr]: {
    officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
    exhibition: animalAvailability(curr),
  },
}), {});

const zooStatus = { ...daysOpened, ...daysClosed };

const ifAnimal = (scheduleTarget) => {
  const animal = species.find((Element) => Element.name === scheduleTarget);
  if (!animal) { return false; }
  return animal;
};

const ifDay = (scheduleTarget) => {
  const day = Object.keys(hours).find((weekDay) => weekDay === scheduleTarget);
  if (!day) { return false; }
  return day;
};

function getSchedule(scheduleTarget) {
  const animal = ifAnimal(scheduleTarget);
  const day = ifDay(scheduleTarget);
  if (day === 'Monday') { return daysClosed; }
  if (day) {
    return { [day]: daysOpened[day] };
  } if (animal) { return animal.availability; }
  return zooStatus;
}

module.exports = getSchedule;
