import {UnionRangeValidationWithTypeAlias} from "./range-validator";


describe('range validator', () => {

  it('check range', () => {

      const validator = new UnionRangeValidationWithTypeAlias(0, 100);

      const isInRange = validator.IsInRange(34);
      expect(isInRange).toBe(true);

      const isInRange2 = validator.IsInRange(434);
      expect(isInRange2).toBe(false);

      const isInRange3 = validator.IsInRange('39');
      expect(isInRange3).toBe(true);

      const isInRange4 = validator.IsInRange('839');
      expect(isInRange4).toBe(false);

  })

});
