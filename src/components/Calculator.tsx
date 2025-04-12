import { useState } from 'react';
import { StringCalculator } from '../services/StringCalculator';

export const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const calculator = new StringCalculator();

  const handleCalculate = () => {
    try {
      // Ensure the input is properly formatted for custom delimiters
      let processedInput = input;
      
      // If the input starts with // but doesn't have a newline, add one
      if (input.startsWith('//') && !input.endsWith('\n')) {
        processedInput = input + '\n';
      }
      
      // Log the input for debugging
      console.log('Input to calculator:', processedInput);
      
      const sum = calculator.add(processedInput);
      setResult(`Result: ${sum}`);
      setError(null);
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setResult(null);
    }
  };

  // Handle example button clicks
  const handleExampleClick = (example: string) => {
    setInput(example);
  };

  return (
    <div className="calculator">
      <h1>String Calculator</h1>
      <div className="input-group">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
          className="numbers-input"
        />
        <button onClick={handleCalculate} className="calculate-button">
          Calculate
        </button>
      </div>
      <div className="instructions">
        <p>Supported formats:</p>
        <ul>
          <li>
            <button 
              className="example-button" 
              onClick={() => handleExampleClick('1,2,3')}
            >
              Comma-separated: 1,2,3
            </button>
          </li>
          <li>
            <button 
              className="example-button" 
              onClick={() => handleExampleClick('1\n2,3')}
            >
              Newline-separated: 1\n2,3
            </button>
          </li>
          <li>
            <button 
              className="example-button" 
              onClick={() => handleExampleClick('1\\n2,3')}
            >
              Literal newline: 1\\n2,3
            </button>
          </li>
          <li>
            <button 
              className="example-button" 
              onClick={() => handleExampleClick('//;\n1;2')}
            >
              Custom delimiter: //;\n1;2
            </button>
          </li>
        </ul>
        <p className="note">Note: For custom delimiters, make sure to include a newline after the delimiter specification.</p>
      </div>
      {result && <div className="result">{result}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};