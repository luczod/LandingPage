import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { NavLinks, INavLinksProps } from ".";
import { linksList } from "./mock";

export default {
  title: "Navbar/NavLinks",
  component: NavLinks,

  args: {
    Links: linksList,
  },
  argTypes: {
    Links: { type: "array" },
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

export const Light = (args: INavLinksProps) => (
  <div>
    <NavLinks {...args} />
  </div>
);
