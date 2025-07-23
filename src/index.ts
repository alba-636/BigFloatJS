
const MAX_FRACTION_DIGITS = 4

export class BigFloat {
  private decimal: bigint
  private fraction: number

  private constructor (decimal: bigint, fraction: number = 0) {
    this.decimal = decimal
    const fractionSign = decimal < 0 ? -1 : 1
    this.fraction = Math.abs(Number(fraction.toFixed(MAX_FRACTION_DIGITS))) * fractionSign
  }

  toString (): string {
    if (this.fraction !== 0) {
      return this.decimal.toString() + '.' + Math.abs(this.fraction).toString().slice(2)
    }
    return this.decimal.toString()
  }

  valueOf (): string {
    return this.toString()
  }

  static fromNumber (value: number): BigFloat {
    if (Number.isNaN(value) || value === null || value === undefined) return new BigFloat(0n)
    if (Number.isInteger(value)) return new BigFloat(BigInt(value))
    
    return BigFloat.fromString(value.toString())
  }

  static fromString (value: string): BigFloat {
    if (value === null || value === undefined || value.length === 0) return new BigFloat(0n)
     
    const splits = value.split('.')
    return new BigFloat(
      BigInt(splits[0]),
      splits[1] ? Number(`0.${splits[1]}`) : 0
    )
  }

  static addition (a: BigFloat, b: BigFloat): BigFloat {
    if (!a || !b) return new BigFloat(0n)

    const fraction = a.fraction + b.fraction
    const keep = fraction >= 1 ? 1 : 0

    const decimal = a.decimal + b.decimal + BigInt(keep)

    return new BigFloat(decimal, fraction - keep)
  }

  static substraction (a: BigFloat, b: BigFloat): BigFloat {
    if (!a || !b) return new BigFloat(0n)

    const fractionSubstraction = Number((a.fraction - b.fraction).toFixed(MAX_FRACTION_DIGITS))
    const decimalSubstraction = a.decimal - b.decimal
    
    // Do decimal should be incremented/decremented by one?
    const keep = fractionSubstraction !== 0 && (fractionSubstraction < 0 !== decimalSubstraction < 0) ? 1 : 0
    
    const decimal = decimalSubstraction < 0
      ? decimalSubstraction + BigInt(keep)
      : decimalSubstraction - BigInt(keep)
    
    const fraction = keep === 0
      ? Math.abs(fractionSubstraction)
      : 1 - Math.abs(fractionSubstraction)

    return new BigFloat(decimal, fraction)
  }

  static multiplication (a: BigFloat, b: BigFloat): BigFloat {
    if (!a || !b) return new BigFloat(0n)

    /*
        a * b
      = x.y * z.w
      = z*x + z*y + w*x + w*y
    */

    const multiplicator = 10 ** MAX_FRACTION_DIGITS

    const decimalMultiplication = b.decimal * a.decimal
    const aFraction = a.fraction !== 0 ? (BigInt(a.fraction * multiplicator)) * b.decimal : 0n
    const bFraction = b.fraction !== 0 ? (BigInt(b.fraction * multiplicator)) * a.decimal : 0n
    const fractionMultiplication = b.fraction * a.fraction

    const decimal = decimalMultiplication + (aFraction / BigInt(multiplicator)) + (bFraction / BigInt(multiplicator))
    
    const fraction = Math.abs(fractionMultiplication)
      + Math.abs(Number(`0.${aFraction.toString().slice(-MAX_FRACTION_DIGITS)}`))
      + Math.abs(Number(`0.${bFraction.toString().slice(-MAX_FRACTION_DIGITS)}`))

    const fractionBigFloat = BigFloat.fromString(fraction.toString())

    return new BigFloat(decimal + fractionBigFloat.decimal, fractionBigFloat.fraction)
  }
}
