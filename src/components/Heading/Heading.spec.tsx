import { renderTheme } from "../../styles/render-theme";
import { Heading } from ".";
import { screen } from "@testing-library/react";
import { themefn } from "../../styles/themefn";

describe("<Heading/>", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  it("should render with default values", () => {
    const { debug } = renderTheme(<Heading variant="h2">Texto</Heading>);
    const heading = screen.getByRole("heading", { name: "Texto" });
    expect(heading).toHaveStyle({
      color: themefn.colors.primaryColor,
      "font-size": themefn.font.sizes.xl,
    });
  });
});
