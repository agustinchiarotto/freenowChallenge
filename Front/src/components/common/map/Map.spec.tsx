import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Map from './Map';

describe('MapComponent', () => {
  it('should render a Map', () => {
    render(
      <Map center={[0, 0]}>
        <h1>Test children</h1>
      </Map>,
    );

    const map = screen.getByTestId('mapContainer');
    const child = screen.getByText(/test child/i);

    expect(map).toBeInTheDocument();
    expect(child).toHaveTextContent(/test child/i);
  });
});
