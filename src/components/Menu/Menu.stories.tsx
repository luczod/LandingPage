import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { linksList } from "../NavLinks/mock";
import { Menu, IMenuProps } from ".";

export default {
  title: "Navbar/Menu",
  component: Menu,

  args: {
    Links: linksList,
    logoData: {
      text: "Logo",
      link: "#target",
    },
  },
  argTypes: {
    Links: { type: "array" },
    logoData: { type: "object" },
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

export const Template = (args: IMenuProps) => (
  <div>
    <Menu {...args} />
  </div>
);
