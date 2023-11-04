import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { LogoLink } from ".";

describe("<LogoLink/>", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="hello" />);
    const heading = screen.getByRole("heading", { name: "hello" });
    expect(heading.firstChild).toHaveAttribute("href", "#target");
  });

  it("should render img logo", () => {
    renderTheme(<LogoLink link="#target" srcImg="#img" text="hello" />);
    const img = screen.getByRole("img", { name: "hello" });
    expect(img).toHaveAttribute("src", "#img");
  });
  it("should Match snapshot", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" srcImg="#img" text="hello" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
