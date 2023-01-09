const { employees, species } = require('../data/zoo_data');

const getEmployee = (id) => employees.find((employee) => employee.id === id).responsibleFor[0];

const getAnimalById = (idAnimal) => species.find(({ id }) => id === idAnimal).residents;

const getOlderAnimal = (residents) => residents.reduce((acc, curr) => {
  if (acc.age > curr.age) return acc;
  return curr;
});

const getOldestFromFirstSpecies = (id) => {
  const respons = getEmployee(id);
  const residents = getAnimalById(respons);
  return Object.values(getOlderAnimal(residents));
};

module.exports = getOldestFromFirstSpecies;
