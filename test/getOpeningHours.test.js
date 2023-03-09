const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('If dosent pass at arguments, it should return', () => {
    const dayAndTime = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(dayAndTime);
  });
  it('Returns correct day/function at Monday, 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Returns correct day/function at Monday, 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Returns correct day/function at Wednesday, 09:00-AM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Returns error message at Thu, 09:00-AM', () => {
    expect(getOpeningHours('Thu', '09:00-AM')).toThrowErrorn('The day must be valid. Example: Monday');
  });
  it('Returns error message at Friday, 09:00-ZM', () => {
    expect(getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Returns error message at Saturday, C9:00-AM', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
  });
  it('Returns error message at Sunday, 09:c0-AM', () => {
    expect(getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
  });
});
