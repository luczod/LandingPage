import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";
import { Base, IBaseProps } from ".";
import { GridText } from "../../components/GridText";
import Gridmock from "../../components/GridText/mock";
import mock from "./mock";

export default {
  title: "Templates/Base",
  component: Base,

  args: {
    children: (
      <>
        <GridText {...Gridmock} bg />
        <GridText {...Gridmock} />
        <GridText {...Gridmock} bg />
        <GridText {...Gridmock} />
      </>
    ),
    ...mock,
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

export const Template = (args: IBaseProps) => (
  <div>
    <Base {...args} />
  </div>
);
