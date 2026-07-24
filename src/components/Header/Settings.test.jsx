import { act, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import Settings from './Settings';

describe('Settings', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('toggles the language icon after clicking the language button', () => {
    renderWithProviders(<Settings />);

    expect(screen.getByLabelText('Toggle language')).toHaveTextContent('🇨🇴');

    fireEvent.click(screen.getByLabelText('Toggle language'));
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByLabelText('Toggle language')).toHaveTextContent('🇺🇸');
  });
});
