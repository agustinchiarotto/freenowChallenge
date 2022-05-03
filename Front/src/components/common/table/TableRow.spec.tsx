import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Table from './Table';

const mockHeaders = ['head1', 'head2'];

describe('TableComponent', () => {
  it('should render a Table', () => {
    render(
      <Table headers={mockHeaders}>
        <h1>Test children</h1>
      </Table>,
    );

    const table = screen.getByTestId('tableContainer');
    const child = screen.getByText(/test child/i);
    const head1 = screen.getByText(mockHeaders[0]);
    const head2 = screen.getByText(mockHeaders[1]);

    expect(table).toBeInTheDocument();
    expect(head1).toBeInTheDocument();
    expect(head2).toBeInTheDocument();

    expect(child).toHaveTextContent(/test child/i);
  });
});
