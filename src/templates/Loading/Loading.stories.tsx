import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { Loading } from ".";

export default {
  title: "Loading",
  component: Loading,
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

export const Template = () => (
  <div>
    <Loading />
  </div>
);
