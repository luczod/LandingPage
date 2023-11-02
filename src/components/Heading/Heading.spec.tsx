import { renderTheme } from "../../styles/render-theme";
import { Heading } from ".";
import { screen } from "@testing-library/react";
import { themefn } from "../../styles/themefn";
import { ThemeProvider } from "styled-components";

describe("<Heading/>", () => {
  it("should render with default values", () => {
    renderTheme(<Heading variant="h2">Texto</Heading>);
    const heading = screen.getByRole("heading", { name: "Texto" });

    expect(heading).toHaveStyle({
      color: themefn.colors.primaryColor,
      "font-size": themefn.font.sizes.xl,
      "text-transform": "none",
    });
  });

  it("should render with white color", () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: themefn.colors.white,
    });
  });

  it("should render correct heading sizes", () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": themefn.font.sizes.md,
    });

    rerender(
      <ThemeProvider theme={themefn}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": themefn.font.sizes.lg,
    });

    rerender(
      <ThemeProvider theme={themefn}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": themefn.font.sizes.xl,
    });

    rerender(
      <ThemeProvider theme={themefn}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": themefn.font.sizes.xhg,
    });
  });

  /*   it("should render correct font-size when using mobile", () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyleRule("font-size", themefn.font.sizes.xhg, {
      media: themefn.media.lteMedium,
    });
  }); */

  it("should render with uppercase letters", () => {
    renderTheme(<Heading upperTitle={true}>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "text-transform": "uppercase",
    });
  });

  it("should render correct heading element", () => {
    const { container } = renderTheme(<Heading variant="h4">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });
    const h4 = container.querySelector("h4");

    expect(h4?.tagName.toLowerCase()).toBe("h4");
  });
});
