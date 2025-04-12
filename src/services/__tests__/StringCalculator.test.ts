import { StringCalculator } from '../StringCalculator';

describe('StringCalculator', () => {
  it('should return 0 for empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
  });

  it('should return the number for a single number string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1')).toBe(1);
  });

  it('should return sum for two comma-separated numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,5')).toBe(6);
  });

  it('should return sum for five comma-separated numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,5,29,88,1232')).toBe(1355);
  });
});