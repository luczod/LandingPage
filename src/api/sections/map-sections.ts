import { Section, SectionContent } from "../../utils/interfaces";
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
      return mapSectionGrid(section);
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

export const mapSectionGrid = (section: Section) => {
  return section;
};
