import { Heading, IHeadingProps } from ".";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";

export default {
  title: "Heading",
  component: Heading,

  args: {
    children: "O texto está escuro",
    colorDark: true,
    upperTitle: false,
    size: "small",
    as: "h2",
  },
  argTypes: {
    children: { type: "string" },
    colorDark: { type: "boolean" },
    upperTitle: { type: "boolean" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
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

export const Light = (args: IHeadingProps) => <Heading {...args} />;
export const Dark = (args: IHeadingProps) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

Dark.args = {
  children: "O texto está claro",
  colorDark: true,
};
