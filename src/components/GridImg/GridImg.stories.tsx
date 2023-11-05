import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { GridImg, IGridImgProps } from ".";
import mock from "./mock";

export default {
  title: "GridImg",
  component: GridImg,

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

export const Template = (args: IGridImgProps) => (
  <div>
    <GridImg {...args} />
  </div>
);
