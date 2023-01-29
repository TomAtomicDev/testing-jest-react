import { ApplyForm } from "./ApplyForm";
import { screen, render } from "@testing-library/react";

describe("ApplyForm", () => {
  it("renders correctly", () => {
    render(<ApplyForm />);
    const pageHeading = screen.getByRole('heading', {
      name:'Job application form',
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name');
    expect(nameElement2).toBeInTheDocument();

    const textInputElement = screen.getByRole('textbox', {
      name: "Name",
    });
    expect(textInputElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
})

