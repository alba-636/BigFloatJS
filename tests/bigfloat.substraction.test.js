const { BigFloat } = require('../dist/index.js')

describe('Test substraction() methods.', () => {
  test('substraction(BigFloat, BigFloat) null values', () => {
    const expected = BigFloat.fromNumber(0)
    expect(BigFloat.substraction(null, BigFloat.fromNumber(42)).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.substraction(BigFloat.fromNumber(42), null).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.substraction(null, undefined).valueOf()).toBe(expected.valueOf())
  })

  test('substraction(BigFloat, BigFloat) decimal only', () => {
    const a = BigFloat.fromString('63')
    const b = BigFloat.fromString('21')
    expect(BigFloat.substraction(a, b).valueOf()).toBe('42')
    expect(BigFloat.substraction(b, a).valueOf()).toBe('-42')
  })

  test('substraction(BigFloat, BigFloat) decimal only (bigint)', () => {
    const a = BigFloat.fromString('6300000000000000000000000000000000000000')
    const b = BigFloat.fromString('2100000000000000000000000000000000000000')
    expect(BigFloat.substraction(a, b).valueOf()).toBe('4200000000000000000000000000000000000000')
    expect(BigFloat.substraction(b, a).valueOf()).toBe('-4200000000000000000000000000000000000000')
  })

  test('substraction(BigFloat, BigFloat) decimal & fraction', () => {
    const a = BigFloat.fromString('63.021')
    const b = BigFloat.fromString('21.063')
    expect(BigFloat.substraction(a, b).valueOf()).toBe('41.958')
    expect(BigFloat.substraction(b, a).valueOf()).toBe('-41.958')
  })

  test('substraction(BigFloat, BigFloat) decimal & fraction 2', () => {
    const a = BigFloat.fromString('63.063')
    const b = BigFloat.fromString('21.021')
    expect(BigFloat.substraction(a, b).valueOf()).toBe('42.042')
    expect(BigFloat.substraction(b, a).valueOf()).toBe('-42.042')
  })

  test('substraction(BigFloat, BigFloat) decimal & fraction negative value', () => {
    const a = BigFloat.fromString('31.031')
    const b = BigFloat.fromString('-11.011')
    expect(BigFloat.substraction(a, b).valueOf()).toBe('42.042')
    expect(BigFloat.substraction(b, a).valueOf()).toBe('-42.042')
  })
})
