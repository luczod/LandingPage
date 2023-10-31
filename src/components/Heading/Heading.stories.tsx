import { Heading, IHeadingProps } from ".";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";

export default {
  title: "Heading",
  component: Heading,

  args: {
    children: "O texto está escuro",
    light: false,
  },
  argTypes: {
    children: { type: "string" },
    light: { type: "boolean" },
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
export const Dark = (args: IHeadingProps) => <Heading {...args} light={true} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

Dark.args = {
  children: "O texto está claro",
  light: true,
};
