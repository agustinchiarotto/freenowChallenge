import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ShareNowTableBody from './ShareNowTableBody';

const mockFunction = jest.fn();

describe('ShareNowTableBodyComponent', () => {
  it('should render a ShareNowTableBody', () => {
    render(<ShareNowTableBody onClickRow={mockFunction} tbodyData={[]} />);

    const bodyT = screen.getByTestId('sharenowTableContainer');
    expect(bodyT).toBeInTheDocument();
  });
});
