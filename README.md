[![Written in TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue.svg)](https://github.com/cezaraugusto/random-from-array) [![npm](https://img.shields.io/npm/v/random-from-array.svg)]() [![Build Status](https://travis-ci.org/cezaraugusto/random-from-array.svg?branch=master)](https://travis-ci.org/cezaraugusto/random-from-array)

> TypeScript module with type definition support by default. Also works with other JavaScript projects.

# random-from-array

Given an array, return a random value from it.

## Useful when

An array of elements must output a random value.

## Installation

```sh
$ npm i random-from-array
```

## Usage

[Try it on CodeSandbox](https://codesandbox.io/s/20pp8xjlor)

```js
import randomFromArray from 'random-from-array'

randomFromArray(['bossa nova', 'jazz', 'rock']) // one of: 'bossa nova' or 'jazz' or 'rock'

// also works with an array of objects
const arrayOfObj = [
  { value: 'bossa nova' },
  { value: 'jazz' },
  { value: 'rock' }
]

randomFromArray(arrayOfObj) // one of: { value: 'bossa nova' } or { value: 'jazz' } or { value: 'rock' }
```

## License

random-from-array © [Cezar Augusto](https://twitter.com/cezaraugusto). Released under the MIT License.
