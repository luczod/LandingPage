import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Footer } from ".";

describe("<Footer/>", () => {
  it("should render footer", () => {
    const { container } = renderTheme(<Footer htmlfn="<h1>Text</h1>" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
      }

      .c0 a {
        color: inherit;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c2 {
        font-size: 2.4rem;
      }

      .c1 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 4.0rem;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <div
              class="c2"
            >
              <h1>
                Text
              </h1>
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
