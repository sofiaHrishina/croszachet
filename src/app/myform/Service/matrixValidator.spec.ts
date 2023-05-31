import { matrixValidator } from './matrixValidator';

describe('matrixValidator', () => {
  let validator: matrixValidator;

  beforeEach(() => {
    validator = new matrixValidator();
  });

  describe('перевірка validateNumber', () => {
    it('значення входить в заданий проміжок очікуємо true', () => {
    const validNumber = 5;
    const isValid = validator.validateNumber(validNumber);
    expect(isValid).toBe(true);
    });

    it('не валідне значення введено - очікуєм false', () => {
      const nonNumber = 'abc';
      const isValid = validator.validateNumber(nonNumber);
      expect(isValid).toBe(false);
    });

    it('не валідне значення введено - очікуєм false', () => {
      const nanNumber = NaN;
      const isValid = validator.validateNumber(nanNumber);
      expect(isValid).toBe(false);
    });

    it('перевіряємо межі, значення поза межою 1, очікуєм false', () => {
      const lessThanOne = 0;
      const isValid = validator.validateNumber(lessThanOne);
      expect(isValid).toBe(false);
    });

    it('перевіряємо межі, значення поза межою 15, очікуєм false', () => {
      const greaterThanTen = 15;
      const isValid = validator.validateNumber(greaterThanTen);
      expect(isValid).toBe(false);
    });
  });
});