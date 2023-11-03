import { MenuLink, IMenuLinkProps } from ".";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";

export default {
  title: "MenuLink",
  component: MenuLink,

  args: {
    children: "um texto",
    link: "https://www.invertexto.com/calculadora-de-horas",
    newTab: true,
  },
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

export const Light = (args: IMenuLinkProps) => (
  <div style={{ display: "flex" }}>
    <MenuLink {...args} />
  </div>
);
