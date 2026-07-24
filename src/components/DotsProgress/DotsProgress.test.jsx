import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DotsProgress from './DotsProgress';

describe('DotsProgress', () => {
  it('renders the requested number of dots, marking the active ones', () => {
    const { container } = render(
      <DotsProgress maxNumberOfDots={4} numberOfActiveDots={2} />
    );

    const dots = container.querySelectorAll('.dots-progress-dot');
    expect(dots).toHaveLength(4);

    const activeDots = container.querySelectorAll('.dots-progress-dot-active');
    expect(activeDots).toHaveLength(2);
  });
});
