import { renderTheme } from "../../styles/render-theme";
import { MenuLink } from ".";

describe("<MenuLink/>", () => {
  it("should render a link", () => {
    const { container } = renderTheme(
      <MenuLink link_text="Children" url="http://localhost" />
    );
    expect(container.firstChild).toHaveAttribute("target", "_self");
  });

  it("should render open in a new tab", () => {
    const { container } = renderTheme(
      <MenuLink
        link_text="Children"
        url="http://localhost"
        open_in_new_tab={true}
      />
    );
    expect(container.firstChild).toHaveAttribute("target", "_blank");
  });

  it("should Match snapshot", () => {
    const { container } = renderTheme(
      <MenuLink
        link_text="Children"
        url="http://localhost"
        open_in_new_tab={true}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
