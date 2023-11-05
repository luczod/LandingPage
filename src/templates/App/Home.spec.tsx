import { render, screen } from "@testing-library/react";
import { Home } from ".";
import { renderTheme } from "../../styles/render-theme";

it("renders learn react link", () => {
  const { container } = renderTheme(<Home />);
  expect(container).toBeInTheDocument();
});
