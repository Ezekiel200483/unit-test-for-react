import { render, screen } from '@testing-library/react';
import Async from './Async';
describe ('Async Component', () => {
  test('renders a list of posts', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First Post' }],
    });
    // Arrange
    render(<Async />);
    // Act
    const listItems = await screen.findAllByRole('listitem');
    // Assert
    expect(listItems).not.toHaveLength(0);
  });
});