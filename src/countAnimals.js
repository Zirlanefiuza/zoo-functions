const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === 'species' || animal === 'sex') {
    return data.species.filter((especie) => especie.animal === animal).length; 
  }
};
module.exports = countAnimals;
  