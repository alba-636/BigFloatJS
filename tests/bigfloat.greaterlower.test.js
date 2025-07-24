const { BigFloat } = require('../dist/index.js')

describe('Test isGreaterThan & isLowerThan methods.', () => {
  // isGreaterThan
  test('isGreaterThan(BigFloat) null values', () => {
    const a = new BigFloat(42n)
    expect(a.isGreaterThan(null)).toBeFalsy()
    expect(a.isGreaterThan(undefined)).toBeFalsy()
  })

  test('isGreaterThan(BigFloat) number', () => {
    const a = new BigFloat(42n)
    const b = new BigFloat(21n)
    expect(a.isGreaterThan(b)).toBeTruthy()
    expect(b.isGreaterThan(a)).toBeFalsy()
    expect(a.isGreaterThan(a)).toBeFalsy()
  })

  test('isGreaterThan(BigFloat) float', () => {
    const a = BigFloat.fromString('42.42')
    const b = BigFloat.fromString('42.21')
    expect(a.isGreaterThan(b)).toBeTruthy()
    expect(b.isGreaterThan(a)).toBeFalsy()
    expect(a.isGreaterThan(a)).toBeFalsy()
  })

  // isLowerThan
  test('isLowerThan(BigFloat) null values', () => {
    const a = new BigFloat(42n)
    expect(a.isLowerThan(null)).toBeFalsy()
    expect(a.isLowerThan(undefined)).toBeFalsy()
  })

  test('isLowerThan(BigFloat) number', () => {
    const a = new BigFloat(42n)
    const b = new BigFloat(21n)
    expect(a.isLowerThan(b)).toBeFalsy()
    expect(b.isLowerThan(a)).toBeTruthy()
    expect(a.isLowerThan(a)).toBeFalsy()
  })

  test('isLowerThan(BigFloat) float', () => {
    const a = BigFloat.fromString('42.42')
    const b = BigFloat.fromString('42.21')
    expect(a.isLowerThan(b)).toBeFalsy()
    expect(b.isLowerThan(a)).toBeTruthy()
    expect(a.isLowerThan(a)).toBeFalsy()
  })


  // isEqualTo
  test('isEqualTo(BigFloat) null values', () => {
    const a = new BigFloat(42n)
    expect(a.isEqualTo(null)).toBeFalsy()
    expect(a.isEqualTo(undefined)).toBeFalsy()
  })

  test('isEqualTo(BigFloat) number', () => {
    const a = BigFloat.fromString('42')
    const b = BigFloat.fromString('21')
    expect(a.isEqualTo(b)).toBeFalsy()
    expect(b.isEqualTo(a)).toBeFalsy()
    expect(a.isEqualTo(a)).toBeTruthy()
    expect(b.isEqualTo(b)).toBeTruthy()
  })

  test('isEqualTo(BigFloat) float', () => {
    const a = BigFloat.fromString('42.42')
    const b = BigFloat.fromString('42.21')
    expect(a.isEqualTo(b)).toBeFalsy()
    expect(b.isEqualTo(a)).toBeFalsy()
    expect(a.isEqualTo(a)).toBeTruthy()
    expect(b.isEqualTo(b)).toBeTruthy()
  })


  // absoluteValue
  test('absoluteValue all', () => {
    expect(BigFloat.fromString('42').absoluteValue().valueOf()).toBe('42')
    expect(BigFloat.fromString('-42').absoluteValue().valueOf()).toBe('42')
    expect(BigFloat.fromString('42.42').absoluteValue().valueOf()).toBe('42.42')
    expect(BigFloat.fromString('-42.42').absoluteValue().valueOf()).toBe('42.42')
    expect(BigFloat.fromString('42424242424242424242424242424242424242424242424242.42').absoluteValue().valueOf()).toBe('42424242424242424242424242424242424242424242424242.42')
    expect(BigFloat.fromString('-42424242424242424242424242424242424242424242424242.42').absoluteValue().valueOf()).toBe('42424242424242424242424242424242424242424242424242.42')
  })
})
