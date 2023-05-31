import { Calculation } from './calculation.service';

describe('Calculation', () => {
  let calculation: Calculation;

  beforeEach(() => {
    calculation = new Calculation();
  });

  describe('перевірка calculateRowSum', () => {
    it('Повернена сума всіх рядків рівна 10', () => {
      const row = [1, 2, 3, 4];
      const expectedSum = 10;
      const sum = calculation.calculateRowSum(row);
      expect(sum).toBe(expectedSum);
    });
  });

  describe('перевірка calculateColumnSum', () => {
    it('Повернена сума всіх стовпчиків рівна 15', () => {
      calculation.a = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const columnIndex = 1;
      const expectedSum = 15;
      const sum = calculation.calculateColumnSum(columnIndex);
      expect(sum).toBe(expectedSum);
    });
  });

  describe('перевірка calculateDiagonalSum', () => {
    it('Сума цифр на головній діагоналі рівна 15', () => {
      calculation.a = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const isMainDiagonal = true;
      const expectedSum = 15;

      const sum = calculation.calculateDiagonalSum(isMainDiagonal);

      expect(15).toBe(expectedSum);
    });

    it('Сума цифр на побічній діагоналі рівна 15', () => {
      calculation.a = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const isMainDiagonal = false;
      const expectedSum = 15;

      const sum = calculation.calculateDiagonalSum(isMainDiagonal);

      expect(sum).toBe(expectedSum);
    });
  });

  describe('перевірка is_it_magicSquare', () => {
    it('всі значення рівні 10 очікуємо значення true', () => {
      const sum1 = 10;
      const sum2 = 10;
      const sum3 = 10;

      const result = calculation.is_it_magicSquare(sum1, sum2, sum3);

      expect(result).toBe(true);
    });

    it('всі значення не рівні 10 очікуємо значення false', () => {
      const sum1 = 10;
      const sum2 = 15;
      const sum3 = 5;

      const result = calculation.is_it_magicSquare(sum1, sum2, sum3);

      expect(result).toBe(false);
    });
  });

  describe('перевірка arrays', () => {
    it('творення і заповнення рандомними значеннями', () => {
      calculation.arrays(3);

      expect(calculation.a.length).toBe(3);
      expect(calculation.a[0].length).toBe(3);
      expect(calculation.a[1].length).toBe(3);
      expect(calculation.a[2].length).toBe(3);
    });
  });
});
