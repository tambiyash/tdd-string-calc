export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    const numbersArray = numbers.split(',');
    return numbersArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
}