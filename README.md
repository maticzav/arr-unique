# array-unicus [![Build Status](https://travis-ci.org/maticzav/array-unicus.svg?branch=master)](https://travis-ci.org/maticzav/array-unicus)

> Get deep unique values of an array.

## Install

```
$ npm install --save array-unicus
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
