const { BigFloat } = require('../dist/index.js')

describe('Test addition() methods.', () => {
  test('addition(BigFloat, BigFloat) null values', () => {
    const expected = BigFloat.fromNumber(0)
    expect(BigFloat.addition(null, BigFloat.fromNumber(42)).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.addition(BigFloat.fromNumber(42), null).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.addition(null, undefined).valueOf()).toBe(expected.valueOf())
  })

  test('addition(BigFloat, BigFloat) decimal only', () => {
    const a = BigFloat.fromString('31')
    const b = BigFloat.fromString('11')
    const expected = BigFloat.fromString('42')
    expect(BigFloat.addition(a, b).valueOf()).toBe(expected.valueOf())
  })

  test('addition(BigFloat, BigFloat) decimal only (bigint)', () => {
    const a = BigFloat.fromString('3100000000000000000000000000000000000000')
    const b = BigFloat.fromString('1100000000000000000000000000000000000000')
    const expected = BigFloat.fromString('4200000000000000000000000000000000000000')
    expect(BigFloat.addition(a, b).valueOf()).toBe(expected.valueOf())
  })

  test('addition(BigFloat, BigFloat) decimal & fraction', () => {
    const a = BigFloat.fromString('31.11')
    const b = BigFloat.fromString('11.31')
    const expected = BigFloat.fromString('42.42')
    expect(BigFloat.addition(a, b).valueOf()).toBe(expected.valueOf())
  })

  test('addition(BigFloat, BigFloat) decimal & fraction 2', () => {
    const a = BigFloat.fromString('31.011')
    const b = BigFloat.fromString('11.031')
    const expected = '42.042'
    expect(BigFloat.addition(a, b).valueOf()).toBe(expected)
  })

  test('addition(BigFloat, BigFloat) decimal & fraction & keep', () => {
    const a = BigFloat.fromString('31.911')
    const b = BigFloat.fromString('10.131')
    const expected = '42.042'
    expect(BigFloat.addition(a, b).valueOf()).toBe(expected)
  })

  test('addition(BigFloat, BigFloat) null or undefined', () => {
    const a = BigFloat.fromString('31.011')
    const expected = '0'
    expect(BigFloat.addition(a, null).valueOf()).toBe(expected)
    expect(BigFloat.addition(null, a).valueOf()).toBe(expected)
    expect(BigFloat.addition(null, null).valueOf()).toBe(expected)
    expect(BigFloat.addition(undefined, null).valueOf()).toBe(expected)
  })

  test('addition(BigFloat, BigFloat) negative value', () => {
    const a = BigFloat.fromString('-42.42')
    const b = BigFloat.fromString('21.21')
    expect(BigFloat.addition(a, b).valueOf()).toBe('-21.21')
    expect(BigFloat.addition(b, a).valueOf()).toBe('-21.21')
  })

  test('addition(BigFloat, BigFloat) negative values', () => {
    const a = BigFloat.fromString('-42.42')
    const b = BigFloat.fromString('-21.21')
    expect(BigFloat.addition(a, b).valueOf()).toBe('-63.63')
    expect(BigFloat.addition(b, a).valueOf()).toBe('-63.63')
  })
})
