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

  it('should handle newlines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\n2,3')).toBe(6);
    expect(calculator.add('1\n2\n3,4')).toBe(10);
  });

  it('should handle custom delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
    expect(calculator.add('//;\n1;2;3,4')).toBe(10);
  });

  it('should handle literal \n in the input string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\\n2,3')).toBe(6);
  });

  it('should throw exception for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('-1')).toThrow('Negative numbers not allowed -1');
  });

  it('should throw exception with all negative numbers in message', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('-1,-2,3,-4')).toThrow('Negative numbers not allowed -1,-2,-4');
  });
});