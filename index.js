function twoDArray(x, y, defaultValue = null) {
  return new Array(x).fill(null).map(() => new Array(y).fill(defaultValue));
}

module.exports = twoDArray;

