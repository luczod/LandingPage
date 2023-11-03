import { Textfn, ITextfnProps } from ".";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global-styles";
import { themefn } from "../../styles/themefn";

export default {
  title: "Textfn",
  component: Textfn,

  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero molestias ratione facilis ex. Repudiandae fugiat laborum recusandae!Blanditiis, nobis soluta. Quam, debitis ex dicta doloremque eaque officia. Ipsa, temporibus placeat.`,
  },
  argTypes: {
    children: { type: "string" },
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

export const Light = (args: ITextfnProps) => <Textfn {...args} />;
export const Dark = (args: ITextfnProps) => <Textfn {...args} />;
