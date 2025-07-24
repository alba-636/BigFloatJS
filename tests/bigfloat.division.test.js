const { BigFloat } = require('../dist/index.js')

describe('Test division() methods.', () => {
  test('division(BigFloat, BigFloat) null values', () => {
    const expected = BigFloat.fromNumber(0)
    expect(BigFloat.division(null, BigFloat.fromNumber(42)).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.division(BigFloat.fromNumber(42), null).valueOf()).toBe(expected.valueOf())
    expect(BigFloat.division(null, undefined).valueOf()).toBe(expected.valueOf())
  })

  test('division(BigFloat, BigFloat) without fraction', () => {
    const a = BigFloat.fromString('42')
    const b = BigFloat.fromString('2')
    expect(BigFloat.division(a, b).valueOf()).toBe(BigFloat.fromString('21').valueOf())
    expect(BigFloat.division(b, a).valueOf()).toBe(BigFloat.fromString('0.047619047619').valueOf())
  })

  test('division(BigFloat, BigFloat) with fraction (left || right)', () => {
    const a = BigFloat.fromString('100')
    const b = BigFloat.fromString('2.5')
    expect(BigFloat.division(a, b).valueOf()).toBe(BigFloat.fromString('40').valueOf())
    expect(BigFloat.division(b, a).valueOf()).toBe(BigFloat.fromString('0.025').valueOf())
  })

  test('division(BigFloat, BigFloat) with fraction', () => {
    const a = BigFloat.fromString('42.12')
    const b = BigFloat.fromString('2.85')
    expect(BigFloat.division(a, b).valueOf()).toBe(BigFloat.fromString('14.77894736842105').valueOf())
    expect(BigFloat.division(b, a).valueOf()).toBe(BigFloat.fromString('0.06766381766381767').valueOf())
  })

  test('division(BigFloat, BigFloat) with fraction & negative value', () => {
    const a = BigFloat.fromString('42.12')
    const b = BigFloat.fromString('-2.85')
    expect(BigFloat.division(a, b).valueOf()).toBe(BigFloat.fromString('-14.77894736842105').valueOf())
    expect(BigFloat.division(b, a).valueOf()).toBe(BigFloat.fromString('-0.06766381766381767').valueOf())
  })

  test('division(BigFloat, BigFloat) with fraction & negative values', () => {
    const a = BigFloat.fromString('-42.12')
    const b = BigFloat.fromString('-2.85')
    expect(BigFloat.division(a, b).valueOf()).toBe(BigFloat.fromString('14.77894736842105').valueOf())
    expect(BigFloat.division(b, a).valueOf()).toBe(BigFloat.fromString('0.06766381766381767').valueOf())
  })

  // test('division(BigFloat, BigFloat) bigint', () => {
  //   const a = BigFloat.fromString('42424242424242424242424242424242424242424242424242424242424242424242424242424242.12')
  //   const b = BigFloat.fromString('-21564646556468958446519849846589745678845278945612798562.85')
  //   expect(BigFloat.division(a, b).valueOf()).toBe(BigFloat.fromString('-1967305251822734294560589.7343713057985624051503956852867126742412641987949905121392143015806934705512133135758823910382440828981344616103191816485676550140838119144756566038397844579179591701720281589').valueOf())
  //   expect(BigFloat.division(b, a).valueOf()).toBe(BigFloat.fromString('-0.06766381766381767').valueOf())
  // })
  
})
