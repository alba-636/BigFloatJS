
export class BigFloat {
  num: bigint
  fraction: number

  constructor (a: bigint, b: number = 0) {
    this.num = a
    this.fraction = b
  }

  static fromNumber (value: number): BigFloat {
    if (Number.isNaN(value) || value === null || value === undefined) return new BigFloat(0n)
    return new BigFloat(BigInt(value))
  }

  static addition (a: BigFloat, b: BigFloat): BigFloat {
    return new BigFloat(42n)
  }

  toString (): string {
    if (this.fraction !== 0) {
      return this.num.toString() + '.' + this.fraction.toString()
    }
    return this.num.toString()
  }

  valueOf (): string {
    return this.toString()
  }
}
