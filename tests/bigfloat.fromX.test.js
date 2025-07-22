const { BigFloat } = require('../dist/index.js')

describe('Test fromX() methods.', () => {
  test('fromNumber(number) positive value', () => {
    const value = BigFloat.fromNumber(42)
    const expected = new BigFloat(42n)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromNumber(number) negative value', () => {
    const value = BigFloat.fromNumber(-42)
    const expected = new BigFloat(-42n)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromNumber(number) NaN value', () => {
    const value = BigFloat.fromNumber(NaN)
    const expected = new BigFloat(0n)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromNumber(number) null value', () => {
    const value = BigFloat.fromNumber(null)
    const expected = new BigFloat(0n)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromNumber(number) undefined value', () => {
    const value = BigFloat.fromNumber(undefined)
    const expected = new BigFloat(0n)
    expect(value.valueOf()).toBe(expected.valueOf())
  })
})
