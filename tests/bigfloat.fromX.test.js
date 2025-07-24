const { BigFloat } = require('../dist/index.js')

describe('Test fromX() methods.', () => {
  /** BigFloat.fromNumber(number) */
  test('fromNumber(number) positive value', () => {
    const value = BigFloat.fromString('42')
    expect(value.valueOf()).toBe('42')
  })

  test('fromNumber(number) negative value', () => {
    const value = BigFloat.fromNumber(-42)
    expect(value.valueOf()).toBe('-42')
  })

  test('fromNumber(number) NaN value', () => {
    const value = BigFloat.fromNumber(NaN)
    expect(value.valueOf()).toBe('0')
  })

  test('fromNumber(number) null value', () => {
    const value = BigFloat.fromNumber(null)
    expect(value.valueOf()).toBe('0')
  })

  test('fromNumber(number) float value', () => {
    const value = BigFloat.fromString('42.21')
    expect(value.valueOf()).toBe('42.21')
  })

  test('fromNumber(number) float value x.042', () => {
    const value = BigFloat.fromString('42.021')
    expect(value.valueOf()).toBe('42.021')
  })

  test('fromNumber(number) float value (long fraction)', () => {
    const value = BigFloat.fromString('42.21212121212121')
    expect(value.valueOf()).toBe('42.2121')
  })

  test('fromNumber(number) float value (long decimal)', () => {
    const value = BigFloat.fromString('424242424242424242424242424242424242424242.21')
    expect(value.valueOf()).toBe('424242424242424242424242424242424242424242.21')
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
    const expected = BigFloat.fromNumber(0)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) float value', () => {
    const value = BigFloat.fromString('42.21')
    const expected = new BigFloat(42n, 0.21)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) negative value', () => {
    const value = BigFloat.fromString('-42.21')
    const expected = new BigFloat(-42n, -0.21)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) float value (long fraction)', () => {
    const value = BigFloat.fromString('42.21212121212121')
    const expected = '42.2121'
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) float value (long decimal)', () => {
    const value = BigFloat.fromString('42424242424242.21')
    const expected = new BigFloat(42424242424242n, 0.21)
    expect(value.valueOf()).toBe(expected.valueOf())
  })

  test('fromString(number) float value (bigint)', () => {
    const value = BigFloat.fromString('42424242424242424242424242424242424242424242424242424242.212121')
    const expected = new BigFloat(42424242424242424242424242424242424242424242424242424242n, 0.212121)
    expect(value.valueOf()).toBe(expected.valueOf())
  })
})
