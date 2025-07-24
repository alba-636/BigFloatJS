
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

  isEqualTo (b: BigFloat): boolean {
    if (b === null || b === undefined) return false
    return this.decimal === b.decimal && this.fraction === b.fraction
  }

  isGreaterThan (b: BigFloat): boolean {
    if (b === null || b === undefined) return false
    return this.decimal > b.decimal || (this.decimal === b.decimal && this.fraction > b.fraction)
  }

  isLowerThan (b: BigFloat): boolean {
    if (b === null || b === undefined) return false
    return this.decimal < b.decimal || (this.decimal === b.decimal && this.fraction < b.fraction)
  }

  absoluteValue (): BigFloat {
    const sign = this.decimal < 0 ? -1 : 1
    return BigFloat.multiplication(this, BigFloat.fromNumber(sign))
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
      = f + g + h + j
    */

    const multiplicator = 10 ** MAX_FRACTION_DIGITS

    const f = b.decimal * a.decimal
    const g = b.decimal * BigInt(a.fraction * multiplicator)
    const h = BigInt(b.fraction * multiplicator) * a.decimal
    const j = b.fraction * a.fraction

    const fBigFloat = new BigFloat(f)
    const gBigFloat = new BigFloat(g / BigInt(multiplicator), Number(`0.${g.toString().slice(-MAX_FRACTION_DIGITS).padStart(MAX_FRACTION_DIGITS, '0')}`))
    const hBigFloat = new BigFloat(h / BigInt(multiplicator), Number(`0.${h.toString().slice(-MAX_FRACTION_DIGITS).padStart(MAX_FRACTION_DIGITS, '0')}`))
    const jBigFLoat = BigFloat.fromNumber(j)

    return [fBigFloat, gBigFloat, hBigFloat, jBigFLoat].reduce(BigFloat.addition, BigFloat.fromNumber(0))
  }

  static division (a: BigFloat, b: BigFloat): BigFloat {
    if (!a || !b) return new BigFloat(0n)

    function euclideanDivision (numerator: BigFloat, denominator: BigFloat): { quotient: bigint; remainder: BigFloat, sign: -1 | 1 } {
      const sign = (numerator.decimal < 0 && denominator.decimal >= 0) || (denominator.decimal < 0 && numerator.decimal >= 0) ? -1 : 1
      const N = numerator.absoluteValue()
      const M = denominator.absoluteValue()

      let quotient: bigint = 0n
      let remainder: BigFloat = N
  
      while (remainder.isGreaterThan(M) || remainder.isEqualTo(M)) {
        quotient += 1n
        remainder = BigFloat.substraction(remainder, M)
      }

      return { quotient, remainder, sign }
    }

    const { quotient, remainder, sign } = euclideanDivision(a, b)
    const decimal = quotient * BigInt(sign)

    // Compute one more digits than needed to correctly round the result.
    const multiplicator = 10 ** (MAX_FRACTION_DIGITS + 1)
    const result = euclideanDivision(BigFloat.multiplication(remainder, BigFloat.fromNumber(multiplicator)), b)
    const fraction = Number(`0.${result.quotient.toString().padStart(MAX_FRACTION_DIGITS + 1, '0')}`).toFixed(MAX_FRACTION_DIGITS)

    return new BigFloat(decimal, Number(fraction))
  }

}
