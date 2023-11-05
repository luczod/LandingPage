import { renderTheme } from "../../styles/render-theme";
import { GridImg } from ".";
import mock from "./mock";

describe("<GridImg/>", () => {
  it("should render images in a grid", () => {
    const { container } = renderTheme(<GridImg {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
