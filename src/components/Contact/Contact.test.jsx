import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import emailjs from '@emailjs/browser';
import { renderWithProviders } from '../../test/renderWithProviders';
import Contact from './Contact';

vi.mock('@emailjs/browser', () => ({
  default: { sendForm: vi.fn() },
}));

describe('Contact', () => {
  it('submits the form and shows a success message', async () => {
    emailjs.sendForm.mockResolvedValueOnce({});
    const user = userEvent.setup();
    renderWithProviders(<Contact />);

    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/^email/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/subject/i), 'Hello');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    await user.click(screen.getByRole('button', { name: /send/i }));

    expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
    await waitFor(() =>
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    );
  });
});
