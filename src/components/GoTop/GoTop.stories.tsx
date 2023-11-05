import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { GoTop } from ".";

export default {
  title: "GoTop",
  component: GoTop,

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
  <div style={{ height: "400vh" }}>
    <h2>TOP</h2>
    <p style={{ marginBottom: "50vh" }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolorum
      earum expedita accusantium illum! Officiis ab molestiae pariatur rerum rem
      modi placeat, ipsum repellat tempora tempore quod ratione nihil ex.
    </p>
    <h2>TOP 2</h2>
    <p style={{ marginBottom: "50vh" }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolorum
      earum expedita accusantium illum! Officiis ab molestiae pariatur rerum rem
      modi placeat, ipsum repellat tempora tempore quod ratione nihil ex.
    </p>
    <h2>TOP 3</h2>
    <p style={{ marginBottom: "50vh" }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolorum
      earum expedita accusantium illum! Officiis ab molestiae pariatur rerum rem
      modi placeat, ipsum repellat tempora tempore quod ratione nihil ex.
    </p>
    <h2>TOP 4</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolorum
      earum expedita accusantium illum! Officiis ab molestiae pariatur rerum rem
      modi placeat, ipsum repellat tempora tempore quod ratione nihil ex.
    </p>
    <GoTop />
  </div>
);
