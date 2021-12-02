import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { Router } from "react-router-dom";

describe("<Header />", () => {
  test("should render the title of the website", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText(/Le bon service/i)).toBeInTheDocument();
  });
  test("should render the baseline", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(
      screen.getByText(/Echange de Services entre particuliers/i)
    ).toBeInTheDocument();
  });

  test("should render the input research", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  test("should render form and button Lancer", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
