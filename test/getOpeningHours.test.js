const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste argumento Mondaye 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Teste argumento Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Teste argumento Wednesday e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});

describe('Testes dos erros da função getOpeningHours', () => {
  it('Testa se lança erro "The day must be valid. Example: Monday" ', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa se lança o erro "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa se lança o erro \'The hour should represent a number\'', () => {
    expect(() => getOpeningHours('Friday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Testa se lança o erro The minutes should represent a number', () => {
    expect(() => getOpeningHours('Sunday', '09:a0-AM')).toThrow('The minutes should represent a number');
  });
  it('Testa se lança o erro The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Sunday', '15:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Testa se lança o erro The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Sunday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
