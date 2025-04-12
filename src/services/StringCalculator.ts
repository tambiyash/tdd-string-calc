export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    
    let delimiter = /[,\n]/;
    let numbersToProcess = numbers;

    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      const customDelimiter = numbers.substring(2, delimiterEnd);
      delimiter = new RegExp(`[${customDelimiter},\n]`);
      numbersToProcess = numbers.substring(delimiterEnd + 1);
    }
    const numbersArray = numbersToProcess.split(delimiter);
    return numbersArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
}