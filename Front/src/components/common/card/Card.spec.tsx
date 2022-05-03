import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from './Card';

const testText = 'test text test text';
const testTitle = 'test title';

describe('CardComponent', () => {
  it('should render a Card', () => {
    render(<Card text={testText} title={testTitle} />);

    const card = screen.getByTestId('cardContainer');

    expect(card).toHaveTextContent(testText);
    expect(card).toBeInTheDocument();
  });
});
