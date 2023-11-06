import {
  GridImg,
  GridText,
  Section,
  SectionContent,
} from "../../utils/interfaces";
import { NoArgs } from "../noArgs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapSections(sections?: Array<any>) {
  if (!sections) {
    return [];
  }
  return sections.map((section) => {
    if (section.__component === "section.section-two-columns") {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === "section.section-content") {
      return mapSectionContent(section);
    }
    if (section.__component === "section.section-grid") {
      const {
        __component: { text_grid = [], image_grid = [] },
      } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
    }

    return section;
  });
}

export function mapSectionTwoColumns(section?: Section) {
  if (!section) {
    return NoArgs.sectionEmpty;
  }
  const {
    __component: component,
    title,
    description: text,
    image: { url: srcImg },
    metadata: { background, section_id: sectionId },
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
}

export function mapSectionContent(section?: SectionContent) {
  if (!section) {
    return NoArgs.sectionContent;
  }
  const {
    __component: component,
    title,
    content: html,
    metadata: { background, section_id: sectionId },
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
}

export function mapTextGrid(section?: GridText) {
  if (!section) {
    return NoArgs.gridText;
  }
  const {
    __component: component,
    title,
    description,
    text_grid: grid,
    metadata: { background, section_id: sectionId },
  } = section;

  return {
    component: "section.section-grid-text",
    title,
    background,
    sectionId,
    description,
    grid,
  };
}

export function mapImgGrid(section?: GridImg) {
  if (!section) {
    return NoArgs.gridText;
  }
  const {
    __component: component,
    title,
    description,
    image_grid: grid,
    metadata: { background, section_id: sectionId },
  } = section;

  return {
    component: "section.section-grid-image",
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = "", alternativeText: altText = "" },
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
}
