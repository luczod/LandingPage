import { renderTheme } from "../../styles/render-theme";
import { Base } from ".";
import { MockBase } from "./mock";

describe("<Base/>", () => {
  it("should render base component", () => {
    const { container } = renderTheme(<Base {...MockBase} />);
    expect(container).toMatchSnapshot();
  });
});
