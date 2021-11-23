import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  test("should render the title of the website", () => {
    render(<Header />);
    expect(screen.getByText(/Le bon service/i)).toBeInTheDocument();
  });
  test("should render the baseline", () => {
    render(<Header />);
    expect(
      screen.getByText(/Echange de Services entre particuliers/i)
    ).toBeInTheDocument();
  });
});
