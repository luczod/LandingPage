import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { SectionBackground } from ".";

describe("<SectionBackground/>", () => {
  it("should Match snapshot", () => {
    const { container } = renderTheme(
      <SectionBackground background>
        <h1>Texto</h1>
      </SectionBackground>
    );
    expect(screen.getByRole("heading")).toMatchSnapshot();
    expect(container).toMatchSnapshot();
  });

  it("should render with background dark", () => {
    renderTheme(
      <SectionBackground background>
        <h1>Texto</h1>
      </SectionBackground>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should render with background light", () => {
    renderTheme(
      <SectionBackground background={false}>
        <h1>Texto</h1>
      </SectionBackground>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
