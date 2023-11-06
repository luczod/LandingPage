import { screen, fireEvent } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { GridImg } from ".";
import mock from "./mock";

describe("<GridImg/>", () => {
  it("should render images in a grid", () => {
    const { container } = renderTheme(<GridImg {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it("should render images in modal", () => {
    renderTheme(<GridImg {...mock} />);
    const openModal = screen.getAllByLabelText("item-img")[0];
    const closeModal = screen.getAllByLabelText("Close-img")[0];

    fireEvent.click(openModal);
    const modal = screen.getAllByLabelText("Modal")[0];
    expect(modal).toHaveStyle({ display: "block" });

    fireEvent.click(closeModal);
    expect(modal).toHaveStyle({ display: "none" });
  });
});
