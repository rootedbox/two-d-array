# two-d-array

A simple utility to create a 2D array with specified dimensions and a default value.

## Installation

Install the package using npm:

```bash
npm install rootedbox-two-d-array
```

or yarn
```
yarn add rootedbox-two-d-array
```

## Usage

Require the package in your JavaScript or Node.js project:

```
const twoDArray = require('rootedbox-two-d-array');
```

Then, use the twoDArray function to create a new 2D array with the desired dimensions and default value:

```
const rows = 3;
const cols = 4;
const defaultValue = 0;

const myArray = twoDArray(rows, cols, defaultValue);

console.log(myArray);
// Output:
// [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]
```

If you don't provide a default value, the array will be filled with null:
```
const myArray = twoDArray(rows, cols);

console.log(myArray);
// Output:
// [
//   [null, null, null, null],
//   [null, null, null, null],
//   [null, null, null, null]
// ]

```
