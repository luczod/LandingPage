import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { GoTop } from ".";

describe("<GoTop/>", () => {
  it("should render link go to top", () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole("link", { name: "Go to top" })).toHaveAttribute(
      "href",
      "#"
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background: #0A1128;
        color: #FFFFFF;
        position: fixed;
        right: 3rem;
        bottom: 2rem;
        z-index: 6;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4rem;
        width: 4rem;
        opacity: 0.8;
      }

      <div>
        <a
          aria-label="Go to top"
          class="c0"
          href="#"
          title="Go to top"
        >
          <svg
            class="lucide lucide-chevron-up"
            fill="none"
            height="48"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m18 15-6-6-6 6"
            />
          </svg>
        </a>
      </div>
    `);
  });
});
