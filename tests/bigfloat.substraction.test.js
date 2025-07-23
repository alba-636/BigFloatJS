const { BigFloat } = require('../dist/index.js')

describe('Test substraction() methods.', () => {
  test('substraction(BigFloat, BigFloat) null values', () => {
    const expected = new BigFloat(0n)
    expect(BigFloat.substraction(null, BigFloat.fromNumber(42)).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.substraction(BigFloat.fromNumber(42), null).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.substraction(null, undefined).valueOf()).toBe(expected.valueOf())
  })

  test('substraction(BigFloat, BigFloat) decimal only', () => {
    const a = new BigFloat(63n)
    const b = new BigFloat(21n)
    expect(BigFloat.substraction(a, b).valueOf()).toBe('42')
    expect(BigFloat.substraction(b, a).valueOf()).toBe('-42')
  })

  test('substraction(BigFloat, BigFloat) decimal only (bigint)', () => {
    const a = new BigFloat(6300000000000000000000000000000000000000n)
    const b = new BigFloat(2100000000000000000000000000000000000000n)
    expect(BigFloat.substraction(a, b).valueOf()).toBe('4200000000000000000000000000000000000000')
    expect(BigFloat.substraction(b, a).valueOf()).toBe('-4200000000000000000000000000000000000000')
  })

  test('substraction(BigFloat, BigFloat) decimal & fraction', () => {
    const a = new BigFloat(63n, 0.021)
    const b = new BigFloat(21n, 0.063)
    expect(BigFloat.substraction(a, b).valueOf()).toBe('41.958')
    expect(BigFloat.substraction(b, a).valueOf()).toBe('-41.958')
  })

  test('substraction(BigFloat, BigFloat) decimal & fraction 2', () => {
    const a = new BigFloat(63n, 0.063)
    const b = new BigFloat(21n, 0.021)
    expect(BigFloat.substraction(a, b).valueOf()).toBe('42.042')
    expect(BigFloat.substraction(b, a).valueOf()).toBe('-42.042')
  })

  test('substraction(BigFloat, BigFloat) decimal & fraction negative value', () => {
    const a = new BigFloat(31n, 0.031)
    const b = new BigFloat(-11n, 0.011)
    expect(BigFloat.substraction(a, b).valueOf()).toBe('42.042')
    expect(BigFloat.substraction(b, a).valueOf()).toBe('-42.042')
  })
})
