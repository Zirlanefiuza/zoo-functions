const { species } = require('../data/zoo_data');
// array.hof((elemento, index) => )
// objeto[chave] = valor
const countAnimals = (animal) => {
  if (!animal) {
    const listAnimal = species.reduce((acc, crr) => {
      acc[crr.name] = crr.residents.length;
      return acc;
    }, {});
    return listAnimal;
  }
  const nomeSpecie = species.find((specie) => specie.name === animal.species);
  if (animal.sex) {
    const gender = nomeSpecie.residents.filter((residente) => residente.sex === animal.sex);
    return gender.length;
  }
  return nomeSpecie.residents.length;
};
module.exports = countAnimals;
