import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import GoBackArrow from './GoBackArrow';

describe('GoBackArrowComponent', () => {
  it('should render a Go back arrow', () => {
    render(<GoBackArrow />);

    const arrow = screen.getByTestId('goBackArrow');
    expect(arrow).toBeInTheDocument();
    fireEvent.click(arrow);
    expect(arrow).toHaveClass('cursor-pointer');
  });
});
