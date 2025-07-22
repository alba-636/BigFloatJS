const { BigFloat } = require('../dist/index.js')

describe('Test fromX() methods.', () => {
  /** BigFloat.fromNumber(number) */
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

  test('fromNumber(number) float value', () => {
    const value = BigFloat.fromNumber(42.21)
    const expected = new BigFloat(42n, 21)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromNumber(number) float value (long fraction)', () => {
    const value = BigFloat.fromNumber(42.21212121212121)
    const expected = new BigFloat(42n, 21212121212121)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromNumber(number) float value (long decimal)', () => {
    const value = BigFloat.fromNumber(42424242424242.21)
    const expected = new BigFloat(42424242424242n, 21)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  /** BigFloat.fromString(string) */
  test('fromString(number) positive value', () => {
    const value = BigFloat.fromString('42')
    const expected = new BigFloat(42n)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) negative value', () => {
    const value = BigFloat.fromString('-42')
    const expected = new BigFloat(-42n)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) null value', () => {
    const value = BigFloat.fromString(null)
    const expected = new BigFloat(0n)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) float value', () => {
    const value = BigFloat.fromString('42.21')
    const expected = new BigFloat(42n, 21)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) float value (long fraction)', () => {
    const value = BigFloat.fromString('42.21212121212121')
    const expected = new BigFloat(42n, 21212121212121)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) float value (long decimal)', () => {
    const value = BigFloat.fromString('42424242424242.21')
    const expected = new BigFloat(42424242424242n, 21)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) float value (bigint)', () => {
    const value = BigFloat.fromString('42424242424242424242424242424242424242424242424242424242.212121')
    const expected = new BigFloat(42424242424242424242424242424242424242424242424242424242n, 212121)
    expect(value.valueOf()).toBe(expected.valueOf())
  })
})
