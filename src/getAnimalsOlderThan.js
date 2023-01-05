const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every(({ age: idade }) => idade >= age);
};

module.exports = getAnimalsOlderThan;
