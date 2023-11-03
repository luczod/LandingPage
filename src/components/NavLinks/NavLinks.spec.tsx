import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { NavLinks } from ".";
import { linksList } from "./mock";
import { themefn } from "../../styles/themefn";
//jest -t NavLinks name-of-spec

describe("<NavLinks/>", () => {
  it("should render links", () => {
    renderTheme(<NavLinks Links={linksList} />);
    expect(screen.getAllByRole("link")).toHaveLength(linksList.length);
  });

  it("should not render links", () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });
  /*   it("should render links media", () => {
    const { container } = renderTheme(<NavLinks Links={linksList} />);

    expect(container).toHaveStyleRule("flex-flow", "column wrap", {
      media: "(max-width: 660px)",
    });
    screen.debug();
  }); */

  it("should Match snapshot", () => {
    renderTheme(<NavLinks Links={linksList} />);
    expect(screen.getAllByRole("link")).toMatchSnapshot();
  });
  it("parentElement should Match snapshot", () => {
    const { container } = renderTheme(<NavLinks Links={linksList} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
