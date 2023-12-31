import {
  mapImgGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from "./map-sections";
import FakeData from "../dados.json";
import { MockGridImg, MockGridText } from "./mock";

describe("map-sections", () => {
  it("should render predefined section if no data", () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it("should render sections with data", () => {
    const data = mapSections(FakeData[0].sections);
    expect(data[0].component).toBe("section.section-two-columns");
  });

  it("should map predefined section two columns if no data", () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe("");
    expect(data.sectionId).toBe("");
    expect(data.srcImg).toBe("");
    expect(data.text).toBe("");
    expect(data.title).toBe("");
  });

  it("should map section two columns with data", () => {
    const data = mapSectionTwoColumns({
      __component: "section.section-two-columns",
      title: "title",
      description: "abc",
      metadata: {
        background: true,
        name: "contact",
        section_id: "contact",
      },
      image: {
        alternativeText: "Desenho de pessoas segurando logos do CSS, JS e HTML",
        url: "a.svg",
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe("section.section-two-columns");
    expect(data.sectionId).toBe("contact");
    expect(data.srcImg).toBe("a.svg");
    expect(data.text).toBe("abc");
    expect(data.title).toBe("title");
  });

  it("should map section content if no data", () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe("");
    expect(data.sectionId).toBe("");
    expect(data.title).toBe("");
    expect(data.html).toBe("");
  });

  it("should map section content with data", () => {
    const data = mapSectionContent({
      __component: "section.section-content",
      title: "Pricing",
      content: "abc",
      metadata: {
        background: false,
        name: "pricing",
        section_id: "pricing",
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe("section.section-content");
    expect(data.sectionId).toBe("pricing");
    expect(data.title).toBe("Pricing");
    expect(data.html).toBe("abc");
  });

  it("should map grid text with data", () => {
    const data = mapTextGrid(MockGridText);

    expect(data.background).toBe(true);
    expect(data.component).toBe("section.section-grid-text");
    expect(data.sectionId).toBe("grid-one");
    expect(data.title).toBe("My Grid");
    expect(data.description).toBe("abc");
    if (Array.isArray(data.grid)) {
      expect(data.grid[0].title).toBe("Teste 1");
      expect(data.grid[0].description).toBe("Coisa");
    }
  });

  it("should map grid text if no data", () => {
    const data = mapTextGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe("");
    expect(data.sectionId).toBe("");
    expect(data.title).toBe("");
    expect(data.description).toBe("");
  });

  it("should map grid image with data", () => {
    const data = mapImgGrid(MockGridImg);

    expect(data.background).toBe(false);
    expect(data.component).toBe("section.section-grid-image");
    expect(data.sectionId).toBe("gallery");
    expect(data.title).toBe("Gallery");
    expect(data.description).toBe("abc");
    expect(data.grid[0].srcImg).toBe("a.svg");
    expect(data.grid[0].altText).toBe("abc");
  });

  it("should map grid image if no data", () => {
    const data = mapImgGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe("");
    expect(data.sectionId).toBe("");
    expect(data.title).toBe("");
    expect(data.description).toBe("");
  });
});
