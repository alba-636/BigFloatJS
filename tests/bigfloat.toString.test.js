const { BigFloat } = require('../dist/index.js')

describe('Test toString() method.', () => {
  test('toString small number (without fraction)', () => {
    const value = new BigFloat(42n)
    const expected = '42'
    expect(value.toString()).toBe(expected)
  })

  test('toString big number (without fraction)', () => {
    const value = new BigFloat(9999999999999999999999999999999999999999999999999999n)
    const expected = '9999999999999999999999999999999999999999999999999999'
    expect(value.toString()).toBe(expected)
  })

  test('toString small number (with fraction)', () => {
    const value = new BigFloat(42n, 4242)
    const expected = '42.4242'
    expect(value.toString()).toBe(expected)
  })

  test('toString big number (with fraction)', () => {
    const value = new BigFloat(9999999999999999999999999999999999999999999999999999n, 4242)
    const expected = '9999999999999999999999999999999999999999999999999999.4242'
    expect(value.toString()).toBe(expected)
  })
})
