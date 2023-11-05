import { expect, it, describe } from "vitest";
import { renderTheme } from "../../styles/render-theme";
import { GridTwo } from ".";
import mock from "./mock";

describe("<GridTwo/>", () => {
  it("should render two columns grid", () => {
    const { container } = renderTheme(<GridTwo {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
