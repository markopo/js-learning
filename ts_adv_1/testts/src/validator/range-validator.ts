

export type StringOrNumber = string | number;

export class RangeValidationBase {
  constructor(private start : number, private end : number) {}
  protected RangeCheck(value : number) : boolean {
    return value >= this.start && value <= this.end;
  }
  protected GetNumber(value : string) : number {
    return new Number(value).valueOf();
  }
}

export class UnionRangeValidationWithTypeAlias extends RangeValidationBase {
  IsInRange(value : StringOrNumber) : boolean {
    if (typeof value === "number") {
      return this.RangeCheck(value);
    }
    return this.RangeCheck(this.GetNumber(value));
  }
}
