const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* const gerentes = [
 '0e7b460e-acf4-4e17-bcb3-ee472265db83',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '9e7d4524-363c-416a-8759-8aa7e50c0992',
 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
]; */

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

// const isManager = (id) => gerentes.some((gId) => gId === id);

/* const getRelatedEmployees = (managerId) => employees
  .filter(({ managers }) => managers.includes(managerId))
  .map(({ firstName, lastName }) => `${firstName} ${lastName}`); */

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((accumulator, { firstName, lastName, managers }) => {
    if (managers.includes(managerId)) return [...accumulator, `${firstName} ${lastName}`];
    return accumulator;
  }, []);
};

module.exports = { isManager, getRelatedEmployees };
