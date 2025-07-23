
const MAX_FRACTION_DIGITS = 4

export class BigFloat {
  private decimal: bigint
  private fraction: number

  private constructor (decimal: bigint, fraction: number = 0) {
    this.decimal = decimal
    this.fraction = Number(fraction.toFixed(MAX_FRACTION_DIGITS))
  }

  toString (): string {
    if (this.fraction !== 0) {
      return this.decimal.toString() + '.' + this.fraction.toString().slice(2)
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
}
