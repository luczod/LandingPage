import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { LogoLink, ILogoLinkProps } from ".";

export default {
  title: "LogoLink",
  component: LogoLink,

  args: {
    text: "LogoLink",
    srcImg: "assets/images/logo.svg",
    link: "http://localhost",
  },
  argTypes: {
    text: { type: "string" },
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

export const ImageOnly = (args: ILogoLinkProps) => (
  <div>
    <LogoLink {...args} />
  </div>
);

export const TextOnly = (args: ILogoLinkProps) => (
  <div>
    <LogoLink {...args} />
  </div>
);

TextOnly.args = {
  srcImg: "",
};
