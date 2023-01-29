import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  const skills=['HTML', 'CSS', 'JavaScript', 'Next.js'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getAllByRole('list');

    expect(listElement).toBeInTheDocument();
  })
})