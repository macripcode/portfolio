import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the nav links and calls onClose when one is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    renderWithProviders(<Navbar onClose={onClose} />);

    const contactLink = screen.getByRole('link', { name: /contact me/i });
    expect(contactLink).toHaveAttribute('href', '#contact');

    await user.click(contactLink);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
