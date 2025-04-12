export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    const numbersArray = numbers.split(/[,\n]/);
    return numbersArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
}