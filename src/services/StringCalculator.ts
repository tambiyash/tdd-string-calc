export class StringCalculator {
  add(numbers: string): number {
    // Handling empty string case.
    if (numbers === '') {
      return 0;
    }
    
    let delimiter = /[,\n]/;
    let numbersToProcess = numbers;

    // handling delimiter case.
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      const customDelimiter = numbers.substring(2, delimiterEnd);
      delimiter = new RegExp(`[${customDelimiter},\n]`);
      numbersToProcess = numbers.substring(delimiterEnd + 1);
    }

    // Replace literal \n with actual newline character
    numbersToProcess = numbersToProcess.replace(/\\n/g, '\n');

    const numbersArray = numbersToProcess.split(delimiter);
    console.log(">>>> num Arr", numbersToProcess, numbersArray);

    // handling negative numbers case.
    const negativeNumbers = numbersArray
      .map(num => parseInt(num, 10))
      .filter(num => num < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed ${negativeNumbers.join(',')}`);
    }
    return numbersArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
}