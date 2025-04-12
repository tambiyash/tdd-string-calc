import { render, screen, fireEvent } from '@testing-library/react';
import { Calculator } from '../Calculator';

describe('Calculator', () => {
  it('should render input field and calculate button', () => {
    render(<Calculator />);
    expect(screen.getByPlaceholderText('Enter numbers')).toBeInTheDocument();
    expect(screen.getByText('Calculate')).toBeInTheDocument();
  });

  it('should display result for valid input', () => {
    render(<Calculator />);
    const input = screen.getByPlaceholderText('Enter numbers');
    const button = screen.getByText('Calculate');

    fireEvent.change(input, { target: { value: '1,2,3' } });
    fireEvent.click(button);

    expect(screen.getByText('Result: 6')).toBeInTheDocument();
  });
});