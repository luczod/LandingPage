import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { Base, IBaseProps } from ".";
import { MockBase } from "./mock";

export default {
  title: "Templates/Base",
  component: Base,

  args: MockBase,
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

export const Template = (args: IBaseProps) => (
  <div>
    <Base {...args} />
  </div>
);
