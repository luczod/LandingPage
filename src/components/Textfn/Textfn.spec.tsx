import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Textfn } from ".";

describe("<Textfn/>", () => {
  it("should render", () => {
    renderTheme(<Textfn>Texto</Textfn>);
    expect(screen.getByText("Texto")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Textfn>Children</Textfn>);
    //snpshot sampçe
    //toMatchInlineSnapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
