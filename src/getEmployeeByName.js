const { employees } = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  const empregado = employees
    .find(({ firstName, lastName }) => name === lastName || name === firstName);
  if (!empregado) return {};
  return empregado;
};
module.exports = getEmployeeByName;
console.log(getEmployeeByName());
