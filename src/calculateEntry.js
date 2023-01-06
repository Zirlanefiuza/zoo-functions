const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const quantidade = entrants.reduce((acc, crr) => {
    if (crr.age < 18) acc.child += 1;
    if (crr.age >= 18 && crr.age < 50) acc.adult += 1;
    if (crr.age >= 50) acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return quantidade;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const valor = data.prices;
  const soma = valor.child * child + valor.adult * adult + valor.senior * senior;
  return soma;
};

module.exports = { calculateEntry, countEntrants };
