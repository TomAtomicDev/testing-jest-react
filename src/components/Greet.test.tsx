import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test('Greet renders correctly', () => {
  render(<Greet name="tommy"/>);
  const textElement = screen.getByText(/hello tommy/i);
  expect(textElement).toBeInTheDocument()
})