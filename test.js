import test from 'ava'
import u from './'

test('Unique.', t => {
  t.deepEqual(u([{a: {b: 2}}, {a: {b: 2}}, {a: {b: 3}}]), [{a: {b: 2}}, {a: {b: 3}}])
})
