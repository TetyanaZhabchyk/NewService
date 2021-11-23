import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {
  test("should not render image if there is no url", () => {
    render(<Card />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
