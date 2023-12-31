import { fireEvent, screen } from "@testing-library/react";
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
    renderTheme(<Menu Links={linksList} logoData={logoData} />);
    const btn = screen.getByLabelText("Open/close menu");
    const menuWrap = screen.getByLabelText("wrap");

    expect(btn).toHaveStyleRule("display", "none");
    expect(btn).toHaveStyleRule("display", "flex", {
      media: themefn.media.lteMedium,
    });

    expect(menuWrap).toHaveStyleRule("visibility", "hidden", {
      media: themefn.media.lteMedium,
    });
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();

    fireEvent.click(btn);
    expect(menuWrap).toHaveStyleRule("visibility", "visible", {
      media: themefn.media.lteMedium,
    });
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();

    fireEvent.click(menuWrap);
    expect(menuWrap).toHaveStyleRule("visibility", "hidden", {
      media: themefn.media.lteMedium,
    });
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("should not render links", () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.queryByRole("navigation", { name: "Main menu" })?.firstChild
    ).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
