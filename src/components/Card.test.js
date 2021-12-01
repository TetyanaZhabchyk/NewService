import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {
  test("should not render image if there is no url", () => {
    render(<Card />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  test("should render image if there is an url/ devrait rendre le prix lorsqu'il est donné", () => {
    render(<Card url="test.jpg" />);
    expect(screen.queryByRole("img")).toBeInTheDocument();
  });

  test("should render price when given", () => {
    render(<Card price="10 euros" />);
    expect(screen.getByText("10 euros")).toBeInTheDocument();
  });

  test("should render p when given", () => {
    render(<Card url="image.jpg" titre="Mon titre" price="10 euros" />);
    expect(screen.getByText("")).toBeInTheDocument();
  });
});
