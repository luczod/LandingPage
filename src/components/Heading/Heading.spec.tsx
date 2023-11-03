import { renderTheme } from "../../styles/render-theme";
import { Heading } from ".";
import { screen } from "@testing-library/react";
import { themefn } from "../../styles/themefn";
import { ThemeProvider } from "styled-components";

describe("<Heading/>", () => {
  it("should render with default values", () => {
    const { container } = renderTheme(<Heading variant="h2">Texto</Heading>);
    expect(container.firstChild).toHaveStyle({
      color: themefn.colors.primaryColor,
      "font-size": themefn.font.sizes.xl,
      "text-transform": "none",
    });
  });

  it("should render with white color", () => {
    const { container } = renderTheme(
      <Heading colorDark={false}>texto</Heading>
    );
    expect(container.firstChild).toHaveStyle({
      color: themefn.colors.white,
    });
  });

  it("should render correct heading sizes", () => {
    const { rerender, container } = renderTheme(
      <Heading size="small">texto</Heading>
    );
    expect(container.firstChild).toHaveStyle({
      "font-size": themefn.font.sizes.md,
    });

    rerender(
      <ThemeProvider theme={themefn}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({
      "font-size": themefn.font.sizes.lg,
    });

    rerender(
      <ThemeProvider theme={themefn}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({
      "font-size": themefn.font.sizes.xl,
    });

    rerender(
      <ThemeProvider theme={themefn}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({
      "font-size": themefn.font.sizes.xhg,
    });
  });

  /*   it("should render correct font-size when using mobile", () => {
    const { container } = renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyleRule("font-size", themefn.font.sizes.xhg, {
      media: themefn.media.lteMedium,
    });
  }); */

  it("should render with uppercase letters", () => {
    const { container } = renderTheme(
      <Heading upperTitle={true}>texto</Heading>
    );
    expect(container.firstChild).toHaveStyle({
      "text-transform": "uppercase",
    });
  });

  it("should render correct heading element", () => {
    const { container } = renderTheme(<Heading variant="h4">texto</Heading>);
    const h4 = container.querySelector("h4");

    expect(h4?.tagName.toLowerCase()).toBe("h4");
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Heading>Texto</Heading>);
    //snpshot sampçe
    //toMatchInlineSnapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
