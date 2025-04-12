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
      // Find the first actual newline character (not escaped)
      const delimiterEnd = numbers.indexOf('\n');
      
      if (delimiterEnd === -1) {
        // If there's no newline after the delimiter specification, treat the whole string as numbers
        return parseInt(numbers, 10) || 0;
      }
      
      // Extract the custom delimiter (everything between // and the first newline)
      const customDelimiter = numbers.substring(2, delimiterEnd);
      
      // Create a regex that includes the custom delimiter and standard delimiters
      delimiter = new RegExp(`[${customDelimiter},\n]`);
      
      // Extract the numbers part (everything after the first newline)
      numbersToProcess = numbers.substring(delimiterEnd + 1);
    }

    // Replace literal \n with actual newline character
    numbersToProcess = numbersToProcess.replace(/\\n/g, '\n');
    
    // Split by the delimiter and filter out empty strings
    const numbersArray = numbersToProcess.split(delimiter).filter(num => num !== '');
    
    // If we have no numbers after processing, return 0
    if (numbersArray.length === 0) {
      return 0;
    }

    // handling negative numbers case.
    const negativeNumbers = numbersArray
      .map(num => parseInt(num, 10))
      .filter(num => num < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed ${negativeNumbers.join(',')}`);
    }
    
    const sum = numbersArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
    return sum;
  }
}