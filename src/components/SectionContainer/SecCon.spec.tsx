import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { expect, it, describe } from "vitest";
import { SectionContainer } from ".";

describe("<SectionContainer/>", () => {
  it("should render", () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Texto</h1>
      </SectionContainer>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
