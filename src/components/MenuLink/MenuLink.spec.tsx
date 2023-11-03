import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { MenuLink } from ".";

describe("<MenuLink/>", () => {
  it("should render a link", () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost">Children</MenuLink>
    );
    expect(container.firstChild).toHaveAttribute("target", "_self");
  });

  it("should render open in a new tab", () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>
    );
    expect(container.firstChild).toHaveAttribute("target", "_blank");
  });

  it("should Match snapshot", () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        Children
      </MenuLink>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
