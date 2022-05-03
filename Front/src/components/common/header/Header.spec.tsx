import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('HeaderComponent', () => {
  it('should render a Header', () => {
    render(<Header />);

    const header = screen.getByTestId('headerContainer');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('h-20');
  });
});
