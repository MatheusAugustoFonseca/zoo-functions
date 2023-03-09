const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verify if param count, return 4.', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verify if all the names', () => {
    expect(handlerElephants('names')).toContain('Ilana');
    expect(handlerElephants('names')).toContain('Orval');
    expect(handlerElephants('names')).toContain('Bea');
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verify if averageAge, returns 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Availability, should not return Monday', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Return undefined if nothing is inputed', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Return error message is inputed is not a string', () => {
    expect(handlerElephants(5)).toContain('Parâmetro inválido, é necessário uma string');
  });
});
