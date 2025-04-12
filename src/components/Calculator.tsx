import { useState } from 'react';
import { StringCalculator } from '../services/StringCalculator';

export const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const calculator = new StringCalculator();

  const handleCalculate = () => {
      const sum = calculator.add(input.toString());
      setResult(`Result: ${sum}`);
  }

  return (
    <div className="calculator">
      <h1>String Calculator</h1>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
          className="numbers-input"
        />
        <button onClick={handleCalculate} className="calculate-button">
          Calculate
        </button>
      </div>
      {result && <div className="result">{result}</div>}
    </div>
  );
}