const twoDArray = require('./index');

test('twoDArray creates a 2D array with the correct dimensions and default value', () => {
  const rows = 3;
  const cols = 4;
  const defaultValue = 0;
  const expectedArray = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  const resultArray = twoDArray(rows, cols, defaultValue);

  expect(resultArray.length).toBe(rows);
  resultArray.forEach(row => {
    expect(row.length).toBe(cols);
    row.forEach(value => expect(value).toBe(defaultValue));
  });

  expect(resultArray).toEqual(expectedArray);
});

test('twoDArray creates a 2D array with the correct dimensions and null as default value', () => {
  const rows = 2;
  const cols = 3;
  const expectedArray = [
    [null, null, null],
    [null, null, null]
  ];

  const resultArray = twoDArray(rows, cols);

  expect(resultArray.length).toBe(rows);
  resultArray.forEach(row => {
    expect(row.length).toBe(cols);
    row.forEach(value => expect(value).toBe(null));
  });

  expect(resultArray).toEqual(expectedArray);
});

