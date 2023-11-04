import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Menu } from ".";
import { linksList } from "../NavLinks/mock";
import { themefn } from "../../styles/themefn";

const logoData = {
  text: "Logo",
  link: "#target",
};

describe("<Menu/>", () => {
  it("should render Logo and Main menu Nav", () => {
    const { container } = renderTheme(
      <Menu Links={linksList} logoData={logoData} />
    );
    expect(screen.getByRole("heading", { name: "Logo" })).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Main menu" })
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render menu mobile and button", () => {
    const { container } = renderTheme(
      <Menu Links={linksList} logoData={logoData} />
    );
    const btn = screen.getByLabelText("Open/close menu");
    const menuContainer = btn.nextSibling;
    expect(btn).toHaveStyleRule("display", "none");
    expect(btn).toHaveStyleRule("display", "flex", {
      media: themefn.media.lteMedium,
    });
  });
});
