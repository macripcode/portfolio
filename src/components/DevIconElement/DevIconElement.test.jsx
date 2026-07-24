import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DevIconElement from './DevIconElement';

describe('DevIconElement', () => {
  it('renders an icon element with the given devicon class', () => {
    const { container } = render(<DevIconElement icon="devicon-react-original" />);

    const icon = container.querySelector('i');
    expect(icon).toHaveClass('devicon-react-original', 'colored');
  });
});
