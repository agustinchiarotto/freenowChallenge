import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

const testText = 'test text test text';
const mockFunction = jest.fn();

describe('Buttoncomponent', () => {
  it('should render a Button', () => {
    render(<Button onClick={mockFunction} label={testText} />);

    const btn = screen.getByRole('button');

    expect(btn).toHaveTextContent(testText);
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(btn).toHaveClass('bg-freenowRed-700 rounded-md w-48 h-12 text-white');
  });
});
