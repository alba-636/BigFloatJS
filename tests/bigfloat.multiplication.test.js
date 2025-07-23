const { BigFloat } = require('../dist/index.js')

describe('Test multiplication() methods.', () => {
  test('multiplication(BigFloat, BigFloat) null values', () => {
    const expected = new BigFloat(0n)
    expect(BigFloat.multiplication(null, BigFloat.fromNumber(42)).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.multiplication(BigFloat.fromNumber(42), null).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.multiplication(null, undefined).valueOf()).toBe(expected.valueOf())
  })
  
  test('multiplication(BigFloat, BigFloat) without fraction', () => {
    const a = BigFloat.fromString('21')
    const b = BigFloat.fromString('2')
    expect(BigFloat.multiplication(a, b).valueOf()).toBe('42')
    expect(BigFloat.multiplication(b, a).valueOf()).toBe('42')
  })

  test('multiplication(BigFloat, BigFloat) negative value without fraction', () => {
    const a = BigFloat.fromString('-21')
    const b = BigFloat.fromString('2')
    expect(BigFloat.multiplication(a, b).valueOf()).toBe('-42')
    expect(BigFloat.multiplication(b, a).valueOf()).toBe('-42')
  })

  test('multiplication(BigFloat, BigFloat) negative values without fraction', () => {
    const a = BigFloat.fromString('-21')
    const b = BigFloat.fromString('-2')
    expect(BigFloat.multiplication(a, b).valueOf()).toBe('42')
    expect(BigFloat.multiplication(b, a).valueOf()).toBe('42')
  })
  
  test('multiplication(BigFloat, BigFloat) bigint no fraction', () => {
    const a = BigFloat.fromString('210000000000000000000000000000000')
    const b = BigFloat.fromString('2')
    expect(BigFloat.multiplication(a, b).valueOf()).toBe('420000000000000000000000000000000')
    expect(BigFloat.multiplication(b, a).valueOf()).toBe('420000000000000000000000000000000')
  })
  
  test('multiplication(BigFloat, BigFloat) bigints no fraction', () => {
    const a = BigFloat.fromString('198654989848489498984984984984897')
    const b = BigFloat.fromString('568456498154684684548944654648984')
    expect(BigFloat.multiplication(a, b).valueOf()).toBe('112926719870226775621566519971584345032617580004548974386076394648')
    expect(BigFloat.multiplication(b, a).valueOf()).toBe('112926719870226775621566519971584345032617580004548974386076394648')
  })

  test('multiplication(BigFloat, BigFloat) with fraction (left || right)', () => {
    const a = BigFloat.fromString('21.21')
    const b = BigFloat.fromString('2')
    expect(BigFloat.multiplication(a, b).valueOf()).toBe('42.42')
    expect(BigFloat.multiplication(b, a).valueOf()).toBe('42.42')
  })

  test('multiplication(BigFloat, BigFloat) with fraction (left && right)', () => {
    const a = BigFloat.fromString('21.21')
    const b = BigFloat.fromString('2.5')
    expect(BigFloat.multiplication(a, b).valueOf()).toBe('53.025')
    expect(BigFloat.multiplication(b, a).valueOf()).toBe('53.025')
  })

  test('multiplication(BigFloat, BigFloat) bigints', () => {
    const a = BigFloat.fromString('198654989848489498984984984984897.4242')
    const b = BigFloat.fromString('568456498154684684548944654648984.5876')
    expect(BigFloat.multiplication(a, b).valueOf()).toBe('112926719870226775621566519971584702901536132194221763625576073872.7393')
    expect(BigFloat.multiplication(b, a).valueOf()).toBe('112926719870226775621566519971584702901536132194221763625576073872.7393')
  })

  test('multiplication(BigFloat, BigFloat) bigints negative', () => {
    const a = BigFloat.fromString('198654989848489498984984984984897.4242')
    const b = BigFloat.fromString('-568456498154684684548944654648984.5876')
    expect(BigFloat.multiplication(a, b).valueOf()).toBe('-112926719870226775621566519971584702901536132194221763625576073872.7393')
    expect(BigFloat.multiplication(b, a).valueOf()).toBe('-112926719870226775621566519971584702901536132194221763625576073872.7393')
  })
})
