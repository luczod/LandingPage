import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { Footer, IFooterProps } from ".";

export default {
  title: "Footer",
  component: Footer,

  args: {
    footerHtml: `<p><a href="#">powered by lucas</a></p>`,
  },
  argTypes: {
    footerHtml: { type: "string" },
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

export const Template = (args: IFooterProps) => (
  <div>
    <Footer {...args} />
  </div>
);
