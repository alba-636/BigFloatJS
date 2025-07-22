const { BigFloat } = require('../dist/index.js')

describe('Test valueOf() method.', () => {
  test('valueOf small number (without fraction)', () => {
    const value = new BigFloat(42n)
    const expected = '42'
    expect(value.valueOf()).toBe(expected)
  })

  test('valueOf equals', () => {
    const valueA = new BigFloat(42n)
    const valueB = new BigFloat(42n)
    expect(valueA.valueOf() === valueB.valueOf()).toBeTruthy()
  })

  test('valueOf equals (bigint)', () => {
    const valueA = new BigFloat(9999999999999999999999999999999999999999999999999999n, 4242)
    const valueB = new BigFloat(9999999999999999999999999999999999999999999999999999n, 4242)
    expect(valueA.valueOf() === valueB.valueOf()).toBeTruthy()
  })

  test('valueOf not equals (fraction)', () => {
    const valueA = new BigFloat(42, 4242)
    const valueB = new BigFloat(42, 1111)
    expect(valueA.valueOf() === valueB.valueOf()).toBeFalsy()
  })

  test('valueOf not equals', () => {
    const valueA = new BigFloat(42, 4242)
    const valueB = new BigFloat(11, 4242)
    expect(valueA.valueOf() === valueB.valueOf()).toBeFalsy()
  })
})
