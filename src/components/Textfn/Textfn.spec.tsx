import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { expect, it, describe } from "vitest";
import { Textfn } from ".";

describe("<Textfn/>", () => {
  it("should render", () => {
    renderTheme(<Textfn htmlfn="Texto" />);
    expect(screen.getByText("Texto")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Textfn htmlfn="Texto" />);
    //snpshot sampçe
    //toMatchInlineSnapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
