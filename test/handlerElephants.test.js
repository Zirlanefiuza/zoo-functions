const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se handlerElephants se existe', () => {
    expect(handlerElephants).toBeDefined();
  });
  it('Testa se é undefined sem paramentro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se o parametro se for diferente de string, retona mensagem de erro', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa argumento count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa argumento names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa argumento averageAge', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa argumento location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa argumento popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Testa argumento availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Testa retorno null', () => {
    expect(handlerElephants('amor')).toBeNull();
  });
});
