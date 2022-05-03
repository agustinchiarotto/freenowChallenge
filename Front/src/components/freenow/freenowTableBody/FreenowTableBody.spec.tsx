import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import FreenowTableBody from './FreenowTableBody';

const mockFunction = jest.fn();

describe('FreenowTableBodyComponent', () => {
  it('should render a FreenowTableBody', () => {
    render(<FreenowTableBody onClickRow={mockFunction} tbodyData={[]} />);

    const bodyT = screen.getByTestId('freenowTableContainer');
    expect(bodyT).toBeInTheDocument();
  });
});
