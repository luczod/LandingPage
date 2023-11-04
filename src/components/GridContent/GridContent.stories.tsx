import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { GridContent, IGridContentProps } from ".";
import mock from "./mock";

export default {
  title: "GridContent",
  component: GridContent,
  args: mock,
  argTypes: {
    children: { type: "string" },
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

export const Template = (args: IGridContentProps) => (
  <div>
    <GridContent {...args} />
  </div>
);
