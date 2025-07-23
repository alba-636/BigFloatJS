const { BigFloat } = require('../dist/index.js')

describe('Test addition() methods.', () => {
  test('addition(number, number) null values', () => {
    const expected = new BigFloat(0n)
    expect(BigFloat.addition(null, BigFloat.fromNumber(42)).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.addition(BigFloat.fromNumber(42), null).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.addition(null, undefined).valueOf()).toBe(expected.valueOf())
  })

  test('addition(BigFloat, BigFloat) decimal only', () => {
    const a = new BigFloat(31n)
    const b = new BigFloat(11n)
    const expected = new BigFloat(42n)
    expect(BigFloat.addition(a, b).valueOf()).toBe(expected.valueOf())
  })

  test('addition(BigFloat, BigFloat) decimal only (bigint)', () => {
    const a = new BigFloat(3100000000000000000000000000000000000000n)
    const b = new BigFloat(1100000000000000000000000000000000000000n)
    const expected = new BigFloat(4200000000000000000000000000000000000000n)
    expect(BigFloat.addition(a, b).valueOf()).toBe(expected.valueOf())
  })

  test('addition(BigFloat, BigFloat) decimal & fraction', () => {
    const a = new BigFloat(31n, 0.11)
    const b = new BigFloat(11n, 0.31)
    const expected = new BigFloat(42n, 0.42)
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

})
