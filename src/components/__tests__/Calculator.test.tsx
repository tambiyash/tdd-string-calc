import { render, screen } from '@testing-library/react';
import { Calculator } from '../Calculator';

describe('Calculator', () => {
  it('should render input field and calculate button', () => {
    render(<Calculator />);
    expect(screen.getByPlaceholderText('Enter numbers')).toBeInTheDocument();
    expect(screen.getByText('Calculate')).toBeInTheDocument();
  });
});