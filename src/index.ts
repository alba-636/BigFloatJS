
export class BigFloat {
  private decimal: bigint
  private fraction: number

  constructor (decimal: bigint, fraction: number = 0) {
    this.decimal = decimal
    this.fraction = fraction
  }

  static fromNumber (value: number): BigFloat {
    if (Number.isNaN(value) || value === null || value === undefined) return new BigFloat(0n)
    if (Number.isInteger(value)) return new BigFloat(BigInt(value))
    
    const splits = value.toString().split('.')
    return new BigFloat(
      BigInt(Number(splits[0])),
      Number(splits[1])
    )
  }

  static addition (a: BigFloat, b: BigFloat): BigFloat {
    return new BigFloat(42n)
  }

  toString (): string {
    if (this.fraction !== 0) {
      return this.decimal.toString() + '.' + this.fraction.toString()
    }
    return this.decimal.toString()
  }

  valueOf (): string {
    return this.toString()
  }
}
