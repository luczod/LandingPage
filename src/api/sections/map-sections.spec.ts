import {
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
} from "./map-sections";

describe("map-sections", () => {
  it("should render predefined section if no data", () => {
    const data = mapSections();
    expect(data).toEqual([]);
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
        _id: "602fdf2d540c00269e05617b",
        name: "contact",
        section_id: "contact",
        __v: 0,
        id: "602fdf2d540c00269e05617b",
      },
      image: {
        _id: "602fdc2b540c00269e05616a",
        name: "javascript.svg",
        alternativeText: "Desenho de pessoas segurando logos do CSS, JS e HTML",
        caption: "Desenho de pessoas segurando logos do CSS, JS e HTML",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 30.31,
        url: "a.svg",
        provider_metadata: {
          public_id: "javascript_b57bf48cda",
          resource_type: "image",
        },
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
        _id: "602fdf2d540c00269e056179",
        name: "pricing",
        section_id: "pricing",
        __v: 0,
        id: "602fdf2d540c00269e056179",
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe("section.section-content");
    expect(data.sectionId).toBe("pricing");
    expect(data.title).toBe("Pricing");
    expect(data.html).toBe("abc");
  });
});