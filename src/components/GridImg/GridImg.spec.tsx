import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { GridImg } from ".";

describe("<GridImg/>", () => {
  it("should render", () => {
    renderTheme(
      <GridImg>
        <h1>Texto</h1>
      </GridImg>
    );
    expect(screen.getByRole("heading", { name: "Texto" })).toBeInTheDocument();
  });
});
