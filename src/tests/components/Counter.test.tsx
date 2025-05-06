import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Counter from '../../components/Counter';

describe('Counter', () => {
  it('correctly increases the counter when the button is clicked', () => {
    render(<Counter />);

    const button = screen.getByRole('button');

    // Confirm the element is rendered in the DOM
    expect(button).toBeInTheDocument();
    expect(button.textContent).toMatch('0');

    // Simulate a user clicking the button
    fireEvent.click(button);

    // Confirm the counter is updated
    expect(button.textContent).toMatch('1');
  });
});
