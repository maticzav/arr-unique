'use strinct'

const equals = require('deep-equal')

module.exports = arr => {
  if (!Array.isArray) {
    throw new Error(`Expected an Array but got ${typeof arr}.`)
  }

  return arr.reduce((acc, val) => {
    return acc.concat(acc.find(a => equals(a, val)) === undefined ? val : undefined)
  }, []).filter(u => u !== undefined)
}
