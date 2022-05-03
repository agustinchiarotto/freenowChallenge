import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import TableRow from './TableRow';

const mockFunction = jest.fn();

const testRowId = 1;

describe('TableRowComponent', () => {
  it('should render a TableRow', () => {
    render(
      <TableRow rowId={testRowId} rowIndex={testRowId} onClickRow={mockFunction}>
        <h1>Test children</h1>
      </TableRow>,
    );

    const row = screen.getByTestId('tableRowContainer');
    const child = screen.getByText(/test child/i);

    expect(row).toBeInTheDocument();

    fireEvent.click(row);
    expect(mockFunction).toHaveBeenCalledTimes(1);

    expect(child).toHaveTextContent(/test child/i);
  });
});
