import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  test("should render the title of the website", () => {
    render(<Header></Header>);
    expect(screen.getByText(/Le bon service/i)).toBeInTheDocument();
  });
  test("should render the baseline", () => {
    render(<Header></Header>);
    expect(
      screen.getByText(/Echange de Services entre particuliers/i)
    ).toBeInTheDocument();
  });
  test("should render not input abstract role", () => {
    render(<Header></Header>);
    expect(screen.getByText(/Rechercher/i)).toBeInTheDocument();
  });
  test("should render value", () => {
    render(<form></form>);
    expect(screen.getByValue("Lancer").toBeInTheDocument());
  });
});
