import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { GridText, IGridTextProps } from ".";
import mock from "./mock";

export default {
  title: "GridText",
  component: GridText,

  args: mock,
  argTypes: {
    title: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <ThemeProvider theme={themefn}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    ),
  ],
};

export const Template = (args: IGridTextProps) => (
  <div>
    <GridText {...args} />
  </div>
);
