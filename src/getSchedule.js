const { species, hours } = require('../data/zoo_data');

const findSpecie = (animal) => species.find((specie) => specie.name === animal).availability;

const getOfficeHour = (day) => {
  if (day !== 'Monday') {
    const { open, close } = hours[day];
    return `Open from ${open}am until ${close}pm`;
  }
  return 'CLOSED';
};

const speciesDay = (day) => {
  if (day === 'Monday') return 'The zoo will be closed!';
  return species
    .filter((specie) => specie.availability.includes(day)).map((specie) => specie.name);
};

const week = (day) => ({
  [day]: {
    officeHour: getOfficeHour(day),
    exhibition: speciesDay(day),
  },
});

const getSchedule = (schedule) => {
  if (Object.keys(hours).includes(schedule)) return week(schedule);
  if (species.some((specie) => specie.name === schedule)) {
    return findSpecie(schedule);
  }
  return Object.keys(hours).map(week).reduce((acc, curr) => ({ ...acc, ...curr }), {});
};

module.exports = getSchedule;
