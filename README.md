# arr-unique [![Build Status](https://travis-ci.org/maticzav/arr-unique.svg?branch=master)](https://travis-ci.org/maticzav/arr-unique)

> Get deep unique values of an array.

## Install

```
$ npm install --save arr-unique
```


## Usage

```js
const arr = [
  { a: { b: 2 } },
  { a: { b: 2 } },
  { a: { b: 3 } }
]
const unique = arrayUnique(arr);
//=> [{ a: { b: 2 } }, { a: { b: 3 } }]

```
