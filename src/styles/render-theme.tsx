import { ThemeProvider } from "styled-components";
import { themefn } from "./themefn";
import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

export interface IRenderTheme {
  children: ReactElement;
}

type CustomRenderProps = object & Omit<RenderOptions, "queries">;

export const renderTheme = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) => {
  return render(
    <ThemeProvider theme={themefn}>{ui}</ThemeProvider>,
    renderOptions
  );
};
